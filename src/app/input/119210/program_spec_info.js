let Programs = {
    "1-192-1-0general": {
        "id": "1-192-1-0general",
        "title": "Baccalauréat en math-phys (orientation générale)",
        "credits": 90,
        "segments": ["segment70"],
        "ExtracurricularCourses": [],
        "RecommandedScheduleCoursesFallStart": {
            "session1": ["mat1000","mat1400","mat1600","phy1111","phy1651"],
            "session2": ["mat1410", "mat2050","phy1441","phy1620","phy1652"],
            "session3": [],
            "session4": ["mat2466","phy1234","phy2441","phy2810"],
            "session5": ["mat2115","mat2130","phy1501","phy2215","phy2813"],
            "session6": [],
            "session7": ["mat2300"],
            "session8": ["mat1720"]
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
            "session1": ["mat1000","mat1400","mat1600","phy1111","phy1651"],
            "session2": [],
            "session3": ["mat1410", "mat2050","phy1441","phy1620","phy1652"],
            "session4": ["mat2115","mat2130","phy2215"],
            "session5": [],
            "session6": ["mat2466","phy1234","phy2441","phy2810"],
            "session7": ["mat1720","phy1501","phy2813"],
            "session8": [],
            "session9": ["mat2300"]
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
