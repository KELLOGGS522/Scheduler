
let Programs = {
    "1-205-1-0general": {
        "id": "1-205-1-0general",
        "title": "Baccalauréat en physique-informatique (orientation générale)",
        "credits": 90,
        "segments": ["segment70"],
        "ExtracurricularCourses": [],
        "RecommandedScheduleCoursesFallStart": {
            "session1": ["ift1015","ift1065","mat1400","mat1600","phy1651"],
            "session2": ["ift1025","mat1410","phy1111","phy1441","phy1620","phy1652"],
            "session3": [],
            "session4": ["ift1575","ift2015","phy2345","phy2441"],
            "session5": ["ift2425","phy2215","phy2810"],
            "session6": [],
            "session7": ["ift2105","ift2125"],
            "session8": ["phy1501"]
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
            "session1": ["ift1015","mat1400","mat1600","phy1111","phy1651"],
            "session2": [],
            "session3": ["ift1065","ift2425","phy1620","phy1652"],
            "session4": ["ift1025","ift1575","mat1410","phy1441"],
            "session5": [],
            "session6": ["ift2015","phy2345","phy2810"],
            "session7": ["phy1501","phy2441"],
            "session8": [],
            "session9": ["ift2105","ift2125","phy2215"]
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

const MAX_CREDITS_PER_SEMESTER = 18;
const MIN_CREDITS_PER_SEMESTER_FULL_TIME = 12;
const NUMBER_OF_SESSIONS = 12;
