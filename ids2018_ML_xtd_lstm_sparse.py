# -*- coding: utf-8 -*-
"""
Created on Fri Apr 17 12:57:40 2020

@author: karalis
"""
import pandas as pd
import numpy as np
import scipy as sp
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import MinMaxScaler
from sklearn.preprocessing import StandardScaler
from sklearn.preprocessing import OrdinalEncoder
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.model_selection import train_test_split


attack_types = {
        'normal': 'normal',

        'back': 'DoS',
        'land': 'DoS',
        'neptune': 'DoS',
        'pod': 'DoS',
        'smurf': 'DoS',
        'teardrop': 'DoS',
        'mailbomb': 'DoS',
        'apache2': 'DoS',
        'processtable': 'DoS',
        'udpstorm': 'DoS',

        'ipsweep': 'Probe',
        'nmap': 'Probe',
        'portsweep': 'Probe',
        'satan': 'Probe',
        'mscan': 'Probe',
        'saint': 'Probe',

        'ftp_write': 'R2L',
        'guess_passwd': 'R2L',
        'imap': 'R2L',
        'multihop': 'R2L',
        'phf': 'R2L',
        'spy': 'R2L',
        'warezclient': 'R2L',
        'warezmaster': 'R2L',
        'sendmail': 'R2L',
        'named': 'R2L',
        'snmpgetattack': 'R2L',
        'snmpguess': 'R2L',
        'xlock': 'R2L',
        'xsnoop': 'R2L',
        'worm': 'R2L',

        'buffer_overflow': 'U2R',
        'loadmodule': 'U2R',
        'perl': 'U2R',
        'rootkit': 'U2R',
        'httptunnel': 'U2R',
        'ps': 'U2R',
        'sqlattack': 'U2R',
        'xterm': 'U2R'
}


is_attack = {
        "DoS":"attack",
        "R2L":"attack",
        "U2R":"attack",
        "Probe":"attack",
        "normal":"normal"
}


ids_path_pkl = "/home/ilias/IDS_2018/Processed Traffic Data for ML Algorithms/"
ids_path = "/home/ilias/IDS_2018/Processed Traffic Data for ML Algorithms/"


class read_data:
    col_names = ["Dst Port" ,"Protocol" ,"Timestamp" ,"Flow Duration" ,"Tot Fwd Pkts" ,"Tot Bwd Pkts" ,
				"TotLen Fwd Pkts" ,"TotLen Bwd Pkts" ,"Fwd Pkt Len Max", "Fwd Pkt Len Min",	"Fwd Pkt Len Mean" ,
				"Fwd Pkt Len Std" ,"Bwd Pkt Len Max" ,"Bwd Pkt Len Min" ,"Bwd Pkt Len Mean"	,"Bwd Pkt Len Std" ,
				"Flow Byts/s" ,"Flow Pkts/s" ,"Flow IAT Mean" ,"Flow IAT Std" ,"Flow IAT Max" ,"Flow IAT Min" ,
				"Fwd IAT Tot" ,"Fwd IAT Mean" ,"Fwd IAT Std" ,"Fwd IAT Max" ,"Fwd IAT Min" ,"Bwd IAT Tot" ,
				"Bwd IAT Mean" ,"Bwd IAT Std" ,"Bwd IAT Max" ,"Bwd IAT Min" ,"Fwd PSH Flags" ,"Bwd PSH Flags" ,
				"Fwd URG Flags" ,"Bwd URG Flags" ,"Fwd Header Len" ,"Bwd Header Len" ,"Fwd Pkts/s" ,
				"Bwd Pkts/s" ,"Pkt Len Min" ,"Pkt Len Max" ,"Pkt Len Mean" ,"Pkt Len Std" ,"Pkt Len Var" ,
				"FIN Flag Cnt" ,"SYN Flag Cnt" ,"RST Flag Cnt" ,"PSH Flag Cnt" ,"ACK Flag Cnt" ,"URG Flag Cnt" ,
				"CWE Flag Count" ,"ECE Flag Cnt" ,"Down/Up Ratio" ,"Pkt Size Avg" ,"Fwd Seg Size Avg" ,
				"Bwd Seg Size Avg" ,"Fwd Byts/b Avg" ,"Fwd Pkts/b Avg" ,"Fwd Blk Rate Avg" ,"Bwd Byts/b Avg" ,
				"Bwd Pkts/b Avg" ,"Bwd Blk Rate Avg" ,"Subflow Fwd Pkts" ,"Subflow Fwd Byts" ,
				"Subflow Bwd Pkts" ,"Subflow Bwd Byts" ,"Init Fwd Win Byts" ,"Init Bwd Win Byts" ,
				"Fwd Act Data Pkts" ,"Fwd Seg Size Min" ,"Active Mean" ,"Active Std" ,"Active Max" ,
				"Active Min" ,"Idle Mean" ,"Idle Std" ,"Idle Max" ,"Idle Min" ,"Label"]

    IDS2018All = pd.read_csv(ids_path+"Friday-02-03-2018_TrafficForML_CICFlowMeter.csv", dtype = {"Dst Port": str, "Timestamp": str, "": np.float64})
    IDS2018Train, IDS2018Test = train_test_split(IDS2018All, test_size = 0.2, random_state = 42)
    IDS2018All_con = pd.concat([IDS2018Train, IDS2018Test])

    IDS2018All_con = IDS2018All.drop("Timestamp", axis = 1)
    print (IDS2018All_con.columns.tolist())
    IDS2018All_con['Flow Duration'] = IDS2018All_con['Flow Duration'].astype(np.int64)

#    IDS2018Train.to_csv(ids_path_pkl+"IDS2018Train.csv")

    IDS2018Train_len = IDS2018Train.shape[0]
    IDS2018Test_len = IDS2018Test.shape[0]
    print("Train size", IDS2018Train_len)
    print("Test size", IDS2018Test_len)

    IDS2018All_is_y = IDS2018All_con["Label"].copy()
    IDS2018All_is_x = IDS2018All_con.drop(["Label"], axis=1)

    IDS2018Train_is_y = IDS2018Train["Label"].copy()
    IDS2018Train_is_x = IDS2018Train.drop(["Label"], axis=1)

    IDS2018Test_is_y = IDS2018Test["Label"].copy()
    IDS2018Test_is_x = IDS2018Test.drop(["Label"], axis=1)

    class_mapping = {'Bot': 0, 'Benign': 1}
    Y_All = IDS2018All_is_y.map(class_mapping)
    Y_Train = IDS2018Train_is_y.map(class_mapping)
    Y_Test = IDS2018Test_is_y.map(class_mapping)
#    Y_Train = np.asarray(Y_T)
#    Y_Test = np.asarray(Y_Te)


class preprocess_data:
    col_names_onehot = ["Dst Port" ,"Protocol"]
    IDS2018All_num = read_data.IDS2018All_is_x.drop(col_names_onehot, axis=1)  #pd
    IDS2018All_onehot_s = read_data.IDS2018All_is_x[col_names_onehot]  #pd

    num_pipeline = Pipeline([('scaling', StandardScaler())])
    cat_string_pipeline = Pipeline([('imputer', SimpleImputer(strategy = "constant", fill_value = "missing")), ('ordi', OrdinalEncoder()), ('onehots', OneHotEncoder(categories='auto'))])

    num_attribs = list(IDS2018All_num)
    cat_s_attribs = list(IDS2018All_onehot_s)

    full_pipeline = ColumnTransformer([("num", num_pipeline, num_attribs), ("cats", cat_string_pipeline, cat_s_attribs)])

    IDS2018All_t = full_pipeline.fit_transform(read_data.IDS2018All_is_x)

    X_Train_i = IDS2018All_t[:read_data.IDS2018Train_len]
    X_Test_i = IDS2018All_t[read_data.IDS2018Train_len:read_data.IDS2018Train_len + read_data.IDS2018Test_len]

    X_Train = np.expand_dims(X_Train_i, axis=1)
    X_Test = np.expand_dims(X_Test_i, axis=1)

#    X_Train = sp.sparse.csr_matrix(X_Train_)
#    X_Test = sp.sparse.csr_matrix(X_Test_)

    Y_Train = read_data.Y_Train
    Y_Test = read_data.Y_Test

#    Y_Train_np = Y_Train.to_numpy()
#    Y_Test_np = Y_Test.to_numpy()

#    Y_Train = np.expand_dims(Y_Train_, axis=1)
#    Y_Test = np.expand_dims(Y_Test_, axis=1)


import tensorflow as tf
from tensorflow.keras.layers import Dense
from tensorflow.keras.layers import LSTM
from tensorflow.keras import optimizers
from tensorflow.keras import models
from tensorflow.keras import layers
from tensorflow.keras import wrappers
from tensorflow.keras import initializers
from tensorflow.keras import regularizers
from tensorflow.keras import losses
from scipy.stats import reciprocal
from sklearn.model_selection import RandomizedSearchCV
from tensorflow.keras.wrappers.scikit_learn import KerasClassifier
from sklearn.metrics import classification_report
from sklearn.metrics import mean_squared_error
import time

input_dim = preprocess_data.X_Train.shape[2]
print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
print(input_dim)
print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
#hidden_layers = 1
classes = 2
loop_back =1
hidden_encoder_dim = input_dim
hidden_decoder_dim = input_dim

def build_model(learning_rate, hidden_layers, initiali):
    model = models.Sequential([
    layers.LSTM(hidden_layers, input_shape=(loop_back,input_dim)),
#    layers.LSTM(hidden_layers, input_shape=(loop_back,input_dim), return_sequences=True),
#	layers.BatchNormalization(),
    #    layers.Dense(1, activation ='softmax')])
    layers.Dense(1)])
    adamopt = optimizers.Adam(learning_rate=learning_rate, beta_1=0.9, beta_2=0.999, amsgrad=False)
    #	model.compile(loss="binary_crossentropy", optimizer=adamopt, metrics=['accuracy'])
    model.compile(loss="binary_crossentropy", optimizer=adamopt)
#    print(model.summary())
    return model

keras_reg = wrappers.scikit_learn.KerasClassifier(build_model)

param_distribs = {"learning_rate": reciprocal(0.0001, 0.0005), "hidden_layers":[1,2,4], "initiali":['glorot_uniform', 'he_uniform']	}

rnd_search_cv = RandomizedSearchCV(keras_reg, param_distribs, cv=5, scoring='accuracy', n_jobs=-1, error_score=1)
#rnd_search_cv = RandomizedSearchCV(keras_reg, param_distribs, cv=5, scoring='accuracy', error_score=1)

X_Train = preprocess_data.X_Train
Y_Train = read_data.Y_Train

X_Test = preprocess_data.X_Test
Y_Test = read_data.Y_Test

batch_s = 2000
epoches = 250
ver = 2

start_time = time.time()
rnd_search_cv.fit(X_Train, Y_Train, batch_size=batch_s, epochs=epoches, verbose=ver)
pred_time = time.time()
pred_test = rnd_search_cv.predict(X_Test)
print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!TEST PRED STARTED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
print(pred_test)
print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
print(Y_Test)
print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
print("Estimator time:", pred_time - start_time)
print("Prediction time:", time.time() - pred_time)
print("Total time for fit and predict: %s seconds" % (time.time() - start_time))
print("Classclassification_report:               ", classification_report(Y_Test, pred_test))
print("Best estimator: \n", rnd_search_cv.best_estimator_)
print("Best score: \n", rnd_search_cv.best_score_)
print("Best params: \n", rnd_search_cv.best_params_)
print("Refit time: \n", rnd_search_cv.refit_time_)

from sklearn.metrics import confusion_matrix
cm = confusion_matrix(Y_Test, pred_test)
import itertools
classes = ['attack','normal']
plt.figure()
plt.imshow(cm, interpolation='nearest', cmap=plt.cm.Blues)
plt.title('Confusion matrix')
plt.colorbar()
tick_marks = np.arange(len(classes))
plt.xticks(tick_marks, classes, rotation=45)
plt.yticks(tick_marks, classes)
print(cm)
thresh = cm.max() / 2.
for i, j in itertools.product(range(cm.shape[0]), range(cm.shape[1])):
    plt.text(j, i, cm[i, j].round(4),
             horizontalalignment="center",
             color="white" if cm[i, j] > thresh else "black")

plt.tight_layout()
plt.ylabel('True label')
plt.xlabel('Predicted label')

plt.savefig("cm_lstm.png")
