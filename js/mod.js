var mod = {
    primaryName: "ω",
    secondaryName: "Engine",
    version: "1.0.0",
    engineVer: "0.2.3 P1", //DO NOT MODIFY
    debugMode: true,
    themes: [
        ["my dark", "css/themes/dark.css"],
        ["light", "https://veprogames.github.io/omega-layers/css/main.css"],
        ["naon", "css/themes/neon.css"],
        ["goto blue", "css/themes/darkblue.css"],
        ["Helloween", "css/themes/spooky.css"],
        ["x_x", "css/themes/experience.css"]
    ],
    layerNames: [
        ["gemotry",
        [
            "|_|",
            "/_/",
            "_/\_"
        ]],
        ["Aleph Simulator calssic",
        [
            "aleph",
            "sim",
            "clas"
        ]],
        ["dismey",
        [
            "Disneyendlessgostup",
            "While",
            "????"
        ]],
        ["legacy",
        [
            "????????????????????????????",
            "???????????????",
            "????"
        ]],
        ["age",
        [
            "age",
            "ψϝϛͱϻϙͳϸ",
            ["<span class='flipped-v'>Ω</span>", "<span class='flipped-v'>Ω</span><sup>2</sup>","<span class='flipped-v'>Ω</span><sup>3</sup>","<span class='flipped-v'>Ω</span><sup>2<sup>2</sup></sup>"]
        ]],
        ["dude",
        [
            "αβγδεζηθικλμνξοπρστυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ",
            "ψϝϛͱϻϙͳϸ",
            ["<span class='flipped-v'>Ω</span>", "<span class='flipped-v'>Ω</span><sup>2</sup>","<span class='flipped-v'>Ω</span><sup>3</sup>","<span class='flipped-v'>Ω</span><sup>2<sup>2</sup></sup>"]
        ]],
        ["Alpha",
        [
            "abcdefghijklmnopqrstuvwxyz",
            "123456789",
            "ABCD"
        ]],
        ["arts",
        [
            '!"£$%^&*;:@',
            "<,[{}].>",
            "+×÷^"
        ]],
        ["zero one two three four five",
        [
            '01',
            "01",
            "2345"
        ]],
        ["Random",
        [
            Utils.createRandomWord(10, new Random(Date.now()).nextInt()),
            Utils.createRandomWord(10, new Random(Math.floor(Date.now()/2)).nextInt()),
            [Utils.createRandomWord(2, new Random(Math.floor(Date.now()/3)).nextInt()),Utils.createRandomWord(3, new Random(Math.floor(Date.now()/4)).nextInt()),Utils.createRandomWord(4, new Random(Math.floor(Date.now()/5)).nextInt()),Utils.createRandomWord(5, new Random(Math.floor(Date.now()/6)).nextInt())]
        ]]
    ],
    fonts: [
        ["mono", "css/fonts/typespace.css"],
        ["sins", "css/fonts/comic.css"],
        ["artial", "css/fonts/arial.css"],
        ["robot", "css/fonts/roboto.css"],
        ["Comfortza", "css/fonts/comfortaa.css"],
        ["mine", "css/fonts/minecraft.css"],
    ],
    saves: [
        ["idk save", ""],
        ["fill save", "2"],
        ["text art save", "3"],
        ["gg save", "4"],
    ],
    debugClasses: []
}

//DO NOT MODIFY CODE PAST THIS POINT AS IT IS NEEDED (unless your a pro coder then do some experimenting)

mod.layerNames.push(["Refresh Names", "refresh"])

document.getElementById("superImportantTitle").innerHTML = "<span class='omega'>"+mod.primaryName+"</span>"+mod.secondaryName
