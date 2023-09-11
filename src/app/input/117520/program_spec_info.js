

let Programs = {
    "1-175-2-0general": {
        "id": "1-175-2-0general",
        "title": "Majeure en informatique (orientation générale)",
        "credits": 60,
        "segments": ["segment73"],
        "ExtracurricularCourses": [],
        "RecommandedScheduleCoursesFallStart": {
            "session1": ["ift1005","ift1015","ift1065","ift1215"],
            "session2": ["ift1025","ift1227","ift1575"],
            "session3": [],
            "session4": ["ift2015"]
        },
        "RecommandedScheduleTrimestersFallStart": {
            "session1": ["fall","1 x (bloc Y)"],
            "session2": ["winter","1 x (Y ou choix), 1 x MAT"],
            "session3": ["summer",""],
            "session4": ["fall","2 dans {IFT2035, IFT2105, IFT2255}, 2 x (option)"],
            "session5": ["winter","1 dans {IFT2125, IFT2245}, 4 x (option)"],
            "session6": ["summer",""],
            "session7": ["fall",""],
            "session8": ["winter",""],
            "session9": ["summer",""],
            "session10": ["fall",""],
            "session11": ["winter",""],
            "session12": ["summer",""]
        },
        "RecommandedScheduleCoursesWinterStart": {
            "session1": ["ift1005","ift1015","ift1065","ift1215"],
            "session2": [],
            "session3": ["ift1025","ift1227","ift1575"],
            "session4": ["ift2015"]
        },
        "RecommandedScheduleTrimestersWinterStart": {
            "session1": ["winter","1 x (Y ou choix)"],
            "session2": ["summer",""],
            "session3": ["fall","1 x (Y ou choix), 1 x MAT"],
            "session4": ["winter","1 dans {IFT2125, IFT2245}, 3 x (option)"],
            "session5": ["summer",""],
            "session6": ["fall","2 dans {IFT2035, IFT2105, IFT2255}, 3 x (option)"],
            "session7": ["winter",""],
            "session8": ["summer",""],
            "session9": ["fall",""],
            "session10": ["winter",""],
            "session11": ["summer",""],
            "session12": ["fall",""]
        }
    }
}


const MAX_CREDITS_PER_SEMESTER = 18;
const MIN_CREDITS_PER_SEMESTER_FULL_TIME = 12;
const NUMBER_OF_SESSIONS = 12;
