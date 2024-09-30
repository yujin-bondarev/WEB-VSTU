const RacerAPI = {
    racers: [
      { id: 1, name: "Ben Blocker", carModel: "BMW" },
      { id: 2, name: "Dave Defender", carModel: "AUDI" },
      { id: 3, name: "Sam Sweeper", carModel: "Mercedes" },
      { id: 4, name: "Matt Midfielder", carModel: "Lamborghini" },
    ],
    all: function () {
      return this.racers;
    },
    get: function (id) {
      const isRacer = (p) => p.id === id;
      return this.racers.find(isRacer);
    },
    delete: function (id) {
      const isNotDelRacer = (p) => p.id !== id;
      this.racers = this.racers.filter(isNotDelRacer);
      return true;
    },
    add: function (racer) {
      if (!racer.id)
        racer = {
          ...racer,
          id:
            this.racers.reduce((prev, current) => {
              return prev.id > current.id ? prev : current;
            }, 0).id + 1,
        };
      this.racers = [...this.racers, racer];
      return racer;
    },
    update: function (racer) {
      this.get();
      this.racers.shift(racer);
      return racer;
    },
  };
  export default RacerAPI;