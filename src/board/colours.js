export const colours = {
  blue: {
    main: "#6686BB",
    rowOne: "rgba(0, 46, 142, 0.5)",
    rowTwo: "rgba(0, 50, 165, 0.5)",
    rowThree: "rgba(0, 55, 200, 0.5)",
    rowFour: "rgba(0, 64, 230, 0.5)",
    rowFive: "rgba(0, 77, 232, 0.5)",
    rowSix: "rgba(5, 88, 255, 0.5)",
    rowSeven: "rgba(25, 98, 242, 0.5)",
    rowEight: "rgba(43, 110, 255, 0.5)",
    rowNine: "rgba(58, 120, 255, 0.5)",
    rowTen: "rgba(71, 129, 255, 0.5)",
    rowEleven: "rgba(84, 138, 255, 0.5)",
    rowTwelve: "rgba(99, 148, 255, 0.5)",
    rowThirteen: "rgba(112, 157, 255, 0.5)",
    rowFourteen: "rgba(127, 167, 255, 0.5)",
    rowFifteen: "rgba(142, 178, 255, 0.5)",
    rowSixteen: "rgba(155, 187, 255, 0.5)",
    rowSeventeen: "rgba(165, 194, 255, 0.5)",
    rowEighteen: "rgba(183, 206, 255, 0.5)",
    rowNineteen: "rgba(196, 214, 255, 0.5)",
    rowTwenty: "rgba(214, 227, 255, 0.5)"
  },
  red: {
    main: "#CB66A7",
    rowOne: "rgba(183, 0, 76, 0.5)",
    rowTwo: "rgba(198, 0, 81, 0.5)",
    rowThree: "rgba(216, 0, 88, 0.5)",
    rowFour: "rgba(234, 0, 95, 0.5)",
    rowFive: "rgba(255, 0, 103, 0.5)",
    rowSix: "rgba(255, 10, 109, 0.5)",
    rowSeven: "rgba(255, 25, 118, 0.5)",
    rowEight: "rgba(255, 40, 127, 0.5)",
    rowNine: "rgba(255, 56, 136, 0.5)",
    rowTen: "rgba(255, 71, 150, 0.5)",
    rowEleven: "rgba(255, 99, 161, 0.5)",
    rowTwelve: "rgba(255, 112, 168, 0.5)",
    rowThirteen: "rgba(255, 127, 177, 0.5)",
    rowFourteen: "rgba(255, 142, 186, 0.5)"
  },
  yellow: {
    main: "#eab800",
    rowOne: "rgba(201, 167, 0, 0.5)",
    rowTwo: "rgba(214, 177, 0, 0.5)",
    rowThree: "rgba(229, 189, 0, 0.5)",
    rowFour: "rgba(242, 199, 0, 0.5)",
    rowFive: "rgba(255, 210, 5, 0.5)",
    rowSix: "rgba(255, 212, 17, 0.5)",
    rowSeven: "rgba(255, 214, 35, 0.5)",
    rowEight: "rgba(255, 216, 50, 0.5)",
    rowNine: "rgba(255, 220, 73, 0.5)",
    rowTen: "rgba(255, 224, 94, 0.5)",
    rowEleven: "rgba(255, 227, 112, 0.5)",
    rowTwelve: "rgba(255, 230, 130, 0.5)",
    rowThirteen: "rgba(255, 234, 153, 0.5)",
    rowFourteen: "rgba(255, 237, 170, 0.5)"
  },
  green: {
    main: "#00b771",
    rowOne: "rgba(0, 140, 65, 0.5)",
    rowTwo: "rgba(0, 153, 70, 0.5)",
    rowThree: "rgba(0, 163, 75, 0.5)",
    rowFour: "rgba(0, 175, 80, 0.5)",
    rowFive: "rgba(0, 183, 84, 0.5)",
    rowSix: "rgba(0, 188, 86, 0.5)",
    rowSeven: "rgba(0, 198, 91, 0.5)",
    rowEight: "rgba(0, 201, 92, 0.5)",
    rowNine: "rgba(0, 211, 96, 0.5)",
    rowTen: "rgba(0, 219, 100, 0.5)",
    rowEleven: "rgba(0, 224, 101, 0.5)",
    rowTwelve: "rgba(0, 229, 103, 0.5)",
    rowThirteen: "rgba(0, 239, 108, 0.5)",
    rowFourteen: "rgba(0, 255, 114, 0.5)"
  }
};

export const whichColour = function(yPostion, themeColour) {
  switch (yPostion) {
    case 0:
      return colours[themeColour].rowOne;
    case 1:
      return colours[themeColour].rowTwo;
    case 2:
      return colours[themeColour].rowThree;
    case 3:
      return colours[themeColour].rowFour;
    case 4:
      return colours[themeColour].rowFive;
    case 5:
      return colours[themeColour].rowSix;
    case 6:
      return colours[themeColour].rowSeven;
    case 7:
      return colours[themeColour].rowEight;
    case 8:
      return colours[themeColour].rowNine;
    case 9:
      return colours[themeColour].rowTen;
    case 10:
      return colours[themeColour].rowEleven;
    case 11:
      return colours[themeColour].rowTwelve;
    case 12:
      return colours[themeColour].rowThirteen;
    case 13:
      return colours[themeColour].rowFourteen;
  }
};
