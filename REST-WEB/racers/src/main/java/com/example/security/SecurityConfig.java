package com.example.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.example.services.CustomUserDetailsService;

@Configuration
public class SecurityConfig {
        @Autowired
        private CustomUserDetailsService userDetailsService;

        @Autowired
        private JWTFilter jwtFilter;

        @Bean
        public PasswordEncoder passwordEncoder() {
                return new BCryptPasswordEncoder(); // Use BCryptPasswordEncoder for better security
        }

        @Bean
        public AuthenticationManager authenticationManager(HttpSecurity http) throws Exception {
                AuthenticationManagerBuilder authenticationManagerBuilder = http
                                .getSharedObject(AuthenticationManagerBuilder.class);
                authenticationManagerBuilder.userDetailsService(userDetailsService);
                return authenticationManagerBuilder.build();
        }

        @Bean
        public UrlBasedCorsConfigurationSource corsConfigurationSource() {
                CorsConfiguration configuration = new CorsConfiguration();
                configuration.setAllowCredentials(true);
                configuration.addAllowedOrigin("http://localhost:3000"); // Разрешаем запросы с этого источника
                configuration.addAllowedHeader("*");
                configuration.addAllowedMethod(HttpMethod.GET);
                configuration.addAllowedMethod(HttpMethod.POST);
                configuration.addAllowedMethod(HttpMethod.PUT);
                configuration.addAllowedMethod(HttpMethod.DELETE);
                configuration.addAllowedMethod(HttpMethod.OPTIONS);

                UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
                source.registerCorsConfiguration("/**", configuration);
                return source;
        }

        @Bean
        public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
                http.cors(cors -> cors.configurationSource(corsConfigurationSource())) // Включаем CORS
                                .csrf(csrf -> csrf.disable()) // Отключаем CSRF
                                .authorizeRequests(requests -> requests.antMatchers("/authenticate").permitAll())
                                .authorizeRequests(requests -> requests.antMatchers(HttpMethod.POST, "/racers/**")
                                                .hasAuthority("ROLE_ADMIN"))
                                .authorizeRequests(requests -> requests.antMatchers(HttpMethod.PUT, "/racers/**")
                                                .hasAuthority("ROLE_ADMIN"))
                                .authorizeRequests(requests -> requests.antMatchers(HttpMethod.DELETE, "/racers/**")
                                                .hasAuthority("ROLE_ADMIN"))
                                .authorizeRequests(requests -> requests.antMatchers("/racers/**")
                                                .hasAnyAuthority("ROLE_USER", "ROLE_ADMIN"))
                                .sessionManagement(management -> management
                                                .sessionCreationPolicy(SessionCreationPolicy.STATELESS));

                http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

                return http.build();
        }
}