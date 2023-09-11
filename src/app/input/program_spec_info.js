
let Programs = {
    "1-175-1-0general": {
        "id": "1-175-1-0general",
        "title": "Baccalauréat en informatique (orientation générale)",
        "credits": 90,
        "segments": ["segment01","segment76"],
        "ExtracurricularCourses": ["mat1903","mat1905","mat1923"],
        "RecommandedScheduleCoursesFallStart": {
            "session1": ["ift1005","ift1015","ift1065","ift1215","mat1400"],
            "session2": ["ift1025","ift1227","mat1600","mat1978"],
            "session3": ["ift1575","ift2015","ift2035","ift2255"],
            "session4": ["ift2105","ift2125","ift2245","ift2905","ift2935"]
        },
        "RecommandedScheduleTrimestersFallStart": {
            "session1": ["fall",""],
            "session2": ["winter",""],
            "session3": ["fall",""],
            "session4": ["winter",""],
            "session5": ["fall",""],
            "session6": ["winter",""],
            "session7": ["fall",""],
            "session8": ["winter",""],
            "session9": ["summer",""]
        },
        "RecommandedScheduleCoursesWinterStart": {
            "session1": ["ift1005","ift1015","ift1065","ift1215","mat1400"],
            "session2": ["ift1025","ift1227","mat1600","mat1978"],
            "session3": ["ift1575","ift2015","ift2105","ift2905"],
            "session4": ["ift2035","ift2125","ift2255"],
            "session5": ["ift2245","ift2935"]
        },
        "RecommandedScheduleTrimestersWinterStart": {
            "session1": ["winter",""],
            "session2": ["fall",""],
            "session3": ["winter",""],
            "session4": ["fall",""],
            "session5": ["winter",""],
            "session6": ["fall",""],
            "session7": ["winter",""],
            "session8": ["fall",""],
            "session9": ["summer",""]
        }
    },
    "1-175-1-0express": {
        "id": "1-175-1-0express",
        "title": "Baccalauréat en informatique (cheminement accéléré)",
        "credits": 90,
        "segments": ["segment01","segment76"],
        "ExtracurricularCourses": ["mat1903","mat1905","mat1923"],
        "RecommandedScheduleCoursesFallStart": {
            "session1": ["ift1005","ift1015","ift1065","ift1215","mat1400"],
            "session2": ["ift1025","ift1227","mat1600","ift1575"],
            "session3": ["ift2015","ift2035","ift2105","ift2255"],
            "session4": ["ift2125","mat1978"],
            "session5": ["ift2905","ift2935","ift2245"],
            "session6": ["ift3225"]
        },
        "RecommandedScheduleTrimestersFallStart": {
            "session1": ["fall",""],
            "session2": ["winter",""],
            "session3": ["summer",""],
            "session4": ["fall",""],
            "session5": ["winter",""],
            "session6": ["summer",""],
            "session7": ["summer",""],
            "session8": ["summer",""],
            "session9": ["summer",""]
        },
        "RecommandedScheduleCoursesWinterStart": {
            "session1": [],
            "session2": [],
            "session3": [],
            "session4": [],
            "session5": []
        },
        "RecommandedScheduleTrimestersWinterStart": {
            "session1": ["winter","le cheminement accéléré ne se donne qu'en automne"],
            "session2": ["fall",""],
            "session3": ["winter",""],
            "session4": ["fall",""],
            "session5": ["winter",""],
            "session6": ["fall",""],
            "session7": ["summer",""],
            "session8": ["summer",""],
            "session9": ["summer",""]
        }
    }
}

const MAX_CREDITS_PER_SEMESTER = 18;
const MIN_CREDITS_PER_SEMESTER_FULL_TIME = 12;
const NUMBER_OF_SESSIONS = 9;
