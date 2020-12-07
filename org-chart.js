const orgChart = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve: {},
        Kyle: {},
        Andra: {}
      },
      Zhao: {
        Richie: {},
        Sofia: {},
        Jen: {}
      }
    },
    Schrage: {
      VanDyck: {
        Sabrina: {},
        Michelle: {},
        Josh: {}
      },
      Swain: {
        Blanch: {},
        Tom: {},
        Joe: {}
      }
    },
    Sandberg: {
      Goler: {
        Eddie: {},
        Julie: {},
        Annie: {}
      },
      Hernandez: {
        Rowi: {},
        Inga: {},
        Morgan: {}
      },
      Moissinac: {
        Amy: {},
        Chuck: {},
        Vinni: {}
      },
      Kelley: {
        Eric: {},
        Ana: {},
        Wes: {}
      }
    }
  }
}

function printChart(chart, numTabs = 0) {
  let output = '';
  let tabs = `\t`.repeat(numTabs);
  let keys = Object.keys(chart);
  if (keys.length === 0) {
    return output;
  }

  keys.forEach(key => {
    output += `${tabs}${key}\n${printChart(chart[key], numTabs + 1)}`
  })
  return output
}

console.log(printChart(orgChart));