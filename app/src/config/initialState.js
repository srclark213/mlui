export default {
    dropdowns: [
        {
            id: 0,
            label: "Parent's Job",
            value: -1,
            options: [
                { id: -1, value: "Unknown"
                },
                { id: 1, value: "Clerical"
                },
                { id: 2, value: "Craftperson"
                },
                { id: 3, value: "Farmer"
                },
                { id: 4, value: "Homemaker"
                },
                { id: 5, value: "Laborer"
                },
                { id: 6, value: "Manager"
                },
                { id: 7, value: "Military"
                },
                { id: 8, value: "Operative"
                },
                { id: 9, value: "Low-pay professional"
                },
                { id: 10, value: "High-pay professional"
                },
                { id: 11, value: "Proprietor"
                },
                { id: 12, value: "Protective Service"
                },
                { id: 13, value: "Sales"
                },
                { id: 14, value: "School Teacher"
                },
                { id: 15, value: "Service"
                },
                { id: 16, value: "Technical"
                },
                { id: 17, value: "Other"
                }
            ]
        },
        {
            id: 1,
            label: "Money Set Aside For College",
            value: 1,
            options: [
                { id: 1, value: "None"
                },
                { id: 2, value: "<2000"
                },
                { id: 3, value: "2000-5000"
                },
                { id: 4, value: "5000-10000"
                },
                { id: 5, value: "10000-20000"
                },
                { id: 6, value: "20000-30000"
                },
                { id: 7, value: "30000-50000"
                },
                { id: 8, value: ">50000"
                }
            ]
        },
        {
            id: 6,
            label: "How often is the student absent",
            value: -1,
            options: [
                { id: -1, value: "Unknown"
                },
                { id: 1, value: "Never"
                },
                { id: 2, value: "Rarely"
                },
                { id: 3, value: "Sometimes"
                },
                { id: 4, value: "Most of the time"
                },
                { id: 5, value: "All of the time"
                }
            ]
        },
        {
            id: 7,
            label: "How far do you expect the student to get in school",
            value: -1,
            options: [
                { id: -1, value: "Unknown"
                },
                { id: 1, value: "Less than High School"
                },
                { id: 2, value: "High School"
                },
                { id: 3, value: "Associate's Degree"
                },
                { id: 4, value: "College Dropout"
                },
                { id: 5, value: "Bachelor's Degree"
                },
                { id: 6, value: "Master's Degree"
                },
                { id: 7, value: "PHD"
                }
            ]
        },
        {
          id: 10,
          value: -1,
          label: "How good at math the student believes themself to be",
          options: [
                { id: -1, value: "Unknown"
                },
                { id: 0, value: "Poor"
                },
                { id: 1, value: "Average"
                },
                { id: 2, value: "Excellent"
                }
            ]
        },
        {
          id: 11,
          value: -1,
          label: "High School GPA",
          options: [
                { id: -1, value: "Unknown"
                },
                { id: 0, value: "0 - 1"
                },
                { id: 1, value: "1 - 2"
                },
                { id: 2, value: "2 - 2.5"
                },
                { id: 3, value: "2.5 - 3"
                },
                { id: 4, value: "3 - 3.5"
                },
                { id: 5, value: "3.5 - 4"
                },
                { id: 6, value: "4+"
                }
            ]
        },
        {
          id: 12,
          value: -1,
          label: "Hours per Week on Extracurricular Activities",
          options: [
                { id: -1, value: "Unknown"
                },
                { id: 0, value: "None"
                },
                { id: 1, value: "<1"
                },
                { id: 2, value: "1 - 4"
                },
                { id: 3, value: "5 - 9"
                },
                { id: 4, value: "10 - 14"
                },
                { id: 5, value: "15 - 19"
                },
                { id: 6, value: "20 - 24"
                },
                { id: 7, value: "25+"
                }
            ]
        },
        {
          id: 13,
          value: -1,
          label: "Hours per Weekend Day Playing Video Games",
          options: [
                { id: -1, value: "Unknown"
                },
                { id: 0, value: "None"
                },
                { id: 1, value: "<1"
                },
                { id: 2, value: "2 - 3"
                },
                { id: 3, value: "3 - 5"
                },
                { id: 4, value: "5+"
                }
            ]
        }
    ],
    sliders: [
        {
            id: 2,
            minVal: 0,
            maxVal: 40,
            value: 20,
            label: "Time spent on homework in school"
        },
        {
            id: 3,
            minVal: 0,
            maxVal: 100,
            value: 50,
            label: "Time spent on homework outside of school"
        },
        {
            id: 4,
            minVal: 0,
            maxVal: 50,
            value: 25,
            label: "Time spent playing video games on weekdays"
        },
        {
          id: 8,
          value: 20,
          minVal: 0,
          maxVal: 40,
          label: "Math Teacher - Years of Experience"
        },
        {
          id: 9,
          value: 50,
          minVal: 0,
          maxVal: 100,
          label: "Percent of High School Teachers Classified as Mediocre"
        },
        {
          id: 14,
          value: 50,
          minVal: 0,
          maxVal: 100,
          label: "Estimated Number Correct on Math Exam"
        },
        {
          id: 15,
          value: 50,
          minVal: 0,
          maxVal: 100,
          label: "Score on Math Exam"
        }
    ]
}