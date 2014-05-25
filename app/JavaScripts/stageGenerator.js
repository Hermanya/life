(function() {
  define(["random"], function(random) {
    return function(dimensionNum, dimensionSize, populationSize) {
      var cellPath, d, halfdimensionSize, i, insertAnotherOne, population, state, substate;
      state = [];
      d = dimensionNum;
      while (--d) {
        i = dimensionSize;
        while (i--) {
          state[i] = [];
        }
      }
      population = [];
      halfdimensionSize = dimensionSize / 2;
      substate = state;
      cellPath = [];
      d = dimensionNum;
      while (--d) {
        cellPath.push(halfdimensionSize);
        substate = substate[halfdimensionSize];
      }
      cellPath.push(halfdimensionSize);
      population.push(cellPath);
      substate[halfdimensionSize] = 1;
      insertAnotherOne = function() {
        var shiftNumber;
        cellPath = population[random(population.length)];
        cellPath = JSON.stringify(cellPath);
        cellPath = JSON.parse(cellPath);
        shiftNumber = (random(dimensionNum)) + 1;
        while (shiftNumber--) {
          cellPath[random(dimensionNum)] += random(2) ? 1 : -1;
        }
        substate = state;
        d = dimensionNum;
        while (d--) {
          substate = state[cellPath[d]];
        }
        if (substate[cellPath[cellPath.length - 1]]) {
          return false;
        } else {
          substate[cellPath[cellPath.length - 1]] = 1;
          population.push(cellPath);
          console.log(cellPath);
          return true;
        }
      };
      while (--populationSize) {
        while (!insertAnotherOne()) {
          console.log('Have a good day!');
        }
      }
      state;
      return state;
    };
  });

}).call(this);

//# sourceMappingURL=stageGenerator.js.map
