// 4. Write a switch that maps a month number (1–12) to its season in Bangladesh.

const month = 4; // April

switch (month) {
    case 3: case 4:
        console.log("Summer (Grishma)");
        break;
    case 5: case 6:
        console.log("Rainy (Barsha)");
        break;
    case 7: case 8:
        console.log("Autumn (Sharat)");
        break;
    case 9: case 10:
        console.log("Late Autumn (Hemanta)");
        break;
    case 11: case 12:
        console.log("Winter (Sheet)");
        break;
    case 1: case 2:
        console.log("Spring (Basanta)");
        break;
    default:
        console.log("Invalid month number. Please use 1-12.");
}