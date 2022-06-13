var mod = {
    primaryName: "Powering",
    secondaryName: "Layers",
    version: "1.0.0",
    engineVer: "0.2.3 P1", //DO NOT MODIFY
    debugMode: true,
    themes: [
        ["Dark", "css/themes/dark.css"],
        ["Light (Legacy)", "https://veprogames.github.io/omega-layers/css/main.css"],
        ["Neon", "css/themes/neon.css"],
        ["Godot Blue", "css/themes/darkblue.css"],
        ["Halloween", "css/themes/spooky.css"],
        ["eXPerience", "css/themes/experience.css"]
    ],
    layerNames: [
        ["Ordinal",
        [
            ["0.00", "0.02", "0.04", "0.09", "0.18", "0.36", "0.66", "1.2", "3.9", "8.89", "ω", "ω+0.5", "ω+0.3", "ω+4.29", "ω+ω", "ω+ω+ω", "ω^(2)", "ω^(2)+ω", "ω^(2)+ω^(2)", "ω^(3)", "ω^(4)", "ω^(5)", "ω^(6)", "ω^(7)", "ω^(8)", "ω^(9)", "ω^(ω)", "ω^(ω+1)"],
            ["ω^(ω+2)", "ω^(ω+3)", "ω^(ω+5)", "ω^(ω^(2))", "ω^(ω^(3))", "ω^(ω^(4))", "ω^(ω^(5))", "ω^(ω^(6))", "ω^(ω^(8))", "ω^(ω^(ω))", "ω^(ω^(ω+1))", "ω^(ω^(ω+2))", "ω^(ω^(ω+3))", "ω^(ω^(ω+5))", "ω^(ω^(ω^(2)))", "ω^(ω^(ω^(3)))", "ω^(ω^(ω^(4)))", "ω^(ω^(ω^(5)))", "ω^(ω^(ω^(8)))", "ω^(ω^(ω^(ω)))", "ω^(ω^(ω^(ω+1)))", "ω^(ω^(ω^(ω+3)))", "ω^(ω^(ω^(ω+5)))", "ω^(ω^(ω^(ω^(2))))", "ω^(ω^(ω^(ω^(5))))", "ω^(ω^(ω^(ω^(8))))"],
            ["ω^(ω^(ω^(ω^(ω))))", "ω^(ω^(ω^(ω^(ω^(2)))))", "ω^(ω^(ω^(ω^(ω^(3)))))"]
        ]],
        ["Ω-Lλγers v2",
        [
            "αβγδεζηθικλμνξοπρστυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩabcdefghijklmnopqrstuvwxyz",
            "ψϝϛͱϻϙͳϸg",
            ["<span class='flipped-v'>Ω</span>", "<span class='flipped-v'>Ω</span><sup>2</sup>","<span class='flipped-v'>Ω</span><sup>3</sup>","<span class='flipped-v'>Ω</span><sup>2<sup>2</sup></sup>"]
        ]],
        ["Powering Legacy",
        [
            "&!)(",
            "!!}|-|",
            ["<span class='flipped-v'>&</span>", "<span class='flipped-v'>&</span><sup>2</sup>","<span class='flipped-v'>&</span><sup>3</sup>","<span class='flipped-v'>&</span><sup>2<sup>2</sup></sup>"]
        ]],
        ["Powering Legacy Classic",
        [
            "-><-|}|>?",
            "!&",
            ["<span class='flipped-v'>?</span>", "<span class='flipped-v'>?</span><sup>2</sup>","<span class='flipped-v'>?</span><sup>3</sup>","<span class='flipped-v'>?</span><sup>2<sup>2</sup></sup>"]
        ]],
        ["Ω-Lλγers",
        [
            "αβγδεζηθικλμνξοπρστυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ",
            "ψϝϛͱϻϙͳϸ",
            ["<span class='flipped-v'>Ω</span>", "<span class='flipped-v'>Ω</span><sup>2</sup>","<span class='flipped-v'>Ω</span><sup>3</sup>","<span class='flipped-v'>Ω</span><sup>2<sup>2</sup></sup>"]
        ]],
        ["Alphabet",
        [
            "abcdefghijklmnopqrstuvwxyz",
            "123456789",
            "ABCD"
        ]],
        ["Symbols",
        [
            '!"£$%^&*;:@',
            "<,[{}].>",
            "+×÷^"
        ]],
        ["Binary",
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
        ["Monospace Typewriter", "css/fonts/typespace.css"],
        ["Comic Sans", "css/fonts/comic.css"],
        ["Arial", "css/fonts/arial.css"],
        ["Roboto", "css/fonts/roboto.css"],
        ["Comfortaa", "css/fonts/comfortaa.css"],
        ["Minecraft", "css/fonts/minecraft.css"],
    ],
    saves: [
        ["Save 1", ""],
        ["Save 2", "2"],
        ["Save 3", "3"],
        ["Save 4", "4"],
    ],
    debugClasses: []
}

//DO NOT MODIFY CODE PAST THIS POINT AS IT IS NEEDED (unless your a pro coder then do some experimenting)

mod.layerNames.push(["Refresh Names", "refresh"])

document.getElementById("superImportantTitle").innerHTML = "<span class='omega'>"+mod.primaryName+"</span>"+mod.secondaryName
