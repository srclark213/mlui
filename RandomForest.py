from sklearn.externals import joblib
from sklearn.ensemble import RandomForestRegressor
import numpy as np

class RandomForest():

    def __init__(self):
        self.model = joblib.load("serialModel/model.pkl")

    def predict(self, inputs):
        """

        :param inputs:
        0: Parent's Job: -1, 1-17 ->
            Don't Know, Clerical, Craftperson, Farmer, Homemaker, Laborer, Manager, Military, Operative,
            Low-pay professional, high-pay professional, Proprietor, Protective Service, Sales,
            School Teacher, Service, Technical, Other
        1: Money Set Aside for College: 1 - 8 ->
            None, <2000, 2000-5000, 5-10k, 10-20k, 20-30k, 30-50k, >50k
        2: Total time spent on homework in school: 0 - 40
        3: Total time spent on homework outside of school: 0 - 100
        4: Total time spent playing video games on weekdays: 0 - 50
        5: Month/Year last worked for pay: YYYYMM or 0
        6: How often is the student absent: -1, 1-5 ->
            Don't know, Never, Rarely, Sometimes, Mostly, All the Time
        7: How far do you expect the student to get in school? -1, 1-7 ->
            Don't Know, Less than HS, HS Grad, Associates, College Dropout, Bach., Mast., PHD
        8: Total years experience (Math teacher): 0-40
        9: % of teachers at school classified as mediocre: 0-100
        10: How good student thinks they are at math (Obfuscated): -9 - 2
        11: GPA in HS: -1, 1-6 ->
            Don't know, 0-1, 1-2, 2-2.5, 2.5-3, 3-3.5, 3.5-4
        12: Hours / Week on extracurricular activities: -1, 1-8 ->
            Don't know, None, <1, 1-4, 5-9, 10-14, 15-19, 20-24, 25
        13: Total time spent playing video games on weekends: -1, 1-6 ->
            DK, None, <1 hr/day, 2-3 hr/day, 3-5 hr/day, 5+ hr/day
        14: Estimated Number Correct on Math Exam: 15-82
        15: Score on Math Exam: 19-80
        :return: % Chance of Success
        """
        return self.model.predict(np.asarray(inputs).reshape(1, -1)) * 100


if __name__ == "__main__":
    predictor = RandomForest()
    print(predictor.predict([100,400,300,400,500,500,700,100,900,1000,1100,1200,1300,1400,1500,1000]))

