let Programs = {
    "1-630-1-9clinique": {
        "id": "1-630-1-9clinique",
        "title": "Baccalaureat en science infirmieres DEC-BAC (orientation clinique - Campus de Laval)",
        "credits": 103,
        "segments": ["segment01","segment70"],
        "ExtracurricularCourses": [],
        "RecommandedScheduleCoursesFallStart": {
            // Automne
            "session1": [],
            // Hiver
            "session2": [],
            // Été
            "session3": [],
            "session4": ["soi2804","soi2814","soi2104","soi2113"],
            "session5": ["soi2623A","soi2623B","soi2775","soi2624","soi2763","css2900"],
            "session6": [],
            "session7": ["soi3822","soi3604A","soi3604B","soi3704","css3900"],
            "session8": ["soi3612","soi3812","soi3614","soi3505","soi3716"]
        },
        "RecommandedScheduleTrimestersFallStart": {
            "session1": ["fall",""],
            "session2": ["winter",""],
            "session3": ["summer",""],
            "session4": ["fall",""],
            "session5": ["winter",""],
            "session6": ["summer",""],
            "session7": ["fall",""],
            "session8": ["winter",""],
            "session9": ["summer",""],
            "session10": ["fall",""],
            "session11": ["winter",""],
            "session12": ["summer",""]
        },
        "RecommandedScheduleCoursesWinterStart": {
            "session1": [],
            "session2": [],
            "session3": [],
            "session4": ["soi2804","soi2814","soi2104","soi2113"],
            "session5": ["soi2623A"],
            "session6": ["soi2623B","soi2775","soi2624","soi2763"],
            "session7": ["soi3822","soi3612","soi3812","soi3604A","soi3604B","soi3704"],
            "session8": [],
            "session9": ["soi3614","soi3505","soi3716","css3900"]
        },
        "RecommandedScheduleTrimestersWinterStart": {
            "session1": ["winter",""],
            "session2": ["summer",""],
            "session3": ["fall",""],
            "session4": ["winter",""],
            "session5": ["summer",""],
            "session6": ["fall",""],
            "session7": ["winter",""],
            "session8": ["summer",""],
            "session9": ["fall",""],
            "session10": ["winter",""],
            "session11": ["summer",""],
            "session12": ["fall",""]
        }
    }
}
// Il va falloir regarder plus précisément le max & min crédit par session et le nombre de session
const MAX_CREDITS_PER_SEMESTER = 19;
const MIN_CREDITS_PER_SEMESTER_FULL_TIME = 12;
const NUMBER_OF_SESSIONS = 12;
