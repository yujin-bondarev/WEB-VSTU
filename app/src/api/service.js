const RacersAPI = {
    racers: [
      { number: 1, name: "Ben Blocker", carModel: "BMW" },
      { number: 2, name: "Dave Defender", carModel: "AUDI" },
      { number: 3, name: "Sam Sweeper", carModel: "Mercedes" },
      { number: 4, name: "Matt Mnumberfielder", carModel: "Lamborghini" },
    ],
    all: function () {
      return this.racers;
    },
    get: function (number) {
      const isRacer = (r) => r.number === number;
      return this.racers.find(isRacer);
    },
    delete: function (number) {
      const isNotDelRacer = (r) => r.number !== number;
      this.racers = this.racers.filter(isNotDelRacer);
      return;
    },
    add: function (racer) {
      this.racers.shift(racer);
      return racer;
    },
    update: function (racer) {
      this.get();
      this.racers.shift(racer);
      return racer;
    },
  };
  export default RacersAPI;