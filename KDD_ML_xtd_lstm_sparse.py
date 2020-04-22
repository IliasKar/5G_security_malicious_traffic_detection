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


kdd_path_pkl = "NSL_KDD/"
kdd_path = "NSL_KDD/"


class read_data:
    col_names = ["duration","protocol_type","service","flag","src_bytes",
        "dst_bytes","land","wrong_fragment","urgent","hot","num_failed_logins",
        "logged_in","num_compromised","root_shell","su_attempted","num_root",
        "num_file_creations","num_shells","num_access_files","num_outbound_cmds",
        "is_host_login","is_guest_login","count","srv_count","serror_rate",
        "srv_serror_rate","rerror_rate","srv_rerror_rate","same_srv_rate",
        "diff_srv_rate","srv_diff_host_rate","dst_host_count","dst_host_srv_count",
        "dst_host_same_srv_rate","dst_host_diff_srv_rate","dst_host_same_src_port_rate",
        "dst_host_srv_diff_host_rate","dst_host_serror_rate","dst_host_srv_serror_rate",
        "dst_host_rerror_rate","dst_host_srv_rerror_rate","label", "difficulty_level"]

    KDDTrain = pd.read_csv(kdd_path+"KDDTrain+.txt",names = col_names,)
    KDDTest = pd.read_csv(kdd_path+"KDDTest+.txt",names = col_names,)

#    KDDTrain = pd.read_csv(kdd_path+"KDDTrain+.txt",names = col_names,)
#    KDDTest = pd.read_csv(kdd_path+"KDDTest+.txt",names = col_names,)
#    KDDTrain = pd.read_csv(kdd_path+"KDDTrain+.txt",names = col_names,)
#    KDDTest = pd.read_csv(kdd_path+"KDDTest+.txt",names = col_names,)


    KDDAll = pd.concat([KDDTrain, KDDTest])

    kdd_diff_level_all = KDDAll["difficulty_level"].copy()
    kdd_diff_level_train = KDDTrain["difficulty_level"].copy()
    kdd_diff_level_test = KDDTest["difficulty_level"].copy()

    KDDAll = KDDAll.drop("difficulty_level", axis = 1)

    KDDTrain.to_csv(kdd_path_pkl+"KDDAll+.csv")

    KDDTrain_len = KDDTrain.shape[0]
    KDDTest_len = KDDTest.shape[0]

    KDDAll["type"] = KDDAll.label.map(lambda x: attack_types[x])
    KDDAll["isa"] = KDDAll.type.map(lambda x: is_attack[x])

    KDDTrain["type"] = KDDTrain.label.map(lambda x: attack_types[x])
    KDDTrain["isa"] = KDDTrain.type.map(lambda x: is_attack[x])

    KDDTest["type"] = KDDTest.label.map(lambda x: attack_types[x])
    KDDTest["isa"] = KDDTest.type.map(lambda x: is_attack[x])

    kdd_attack_type_group = KDDAll.groupby("type")
    kdd_is_attack_group = KDDAll.groupby("isa")

    kdd_attack_type_group.type.count()
    kdd_is_attack_group["isa"].count()

    KDDAll_is = KDDAll.copy()
    KDDAll_type = KDDAll.copy()

    KDDAll_is_y = KDDAll["isa"].copy()
    KDDAll_is.drop(["label", "isa"], axis=1, inplace=True)
    KDDAll_type_y = KDDAll["type"].copy()
    KDDAll_type.drop(["label", "type"], axis=1, inplace=True)

    KDDTrain_is_y = KDDTrain["isa"].copy()
#    KDDTrain_is = KDDTrain.drop(["label", "isa"], axis=1, inplace=True)
    KDDTrain_type_y = KDDTrain["type"].copy()
#    KDDTrain_type = KDDTrain.drop(["label", "type"], axis=1, inplace=True)

    KDDTest_is_y = KDDTest["isa"].copy()
#    KDDTest_is = KDDTest.drop(["label", "isa"], axis=1, inplace=True)
    KDDTest_type_y = KDDTest["type"].copy()
#    KDDTest_type = KDDTest.drop(["label", "type"], axis=1, inplace=True)

#    KDDAll_is_f = KDDAll.drop(["type"], axis=1, inplace=True)
#    KDDTrain_is_f = KDDTrain.drop(["type"], axis=1, inplace=True)
#    KDDTest_is_f = KDDTest.drop(["type"], axis=1, inplace=True)

#    KDDAll_type_so_f = KDDAll.drop(["isa"], axis=1, inplace=True)
#    KDDTrain_type_so_f = KDDTrain.drop(["isa"], axis=1, inplace=True)
#    KDDTest_type_so_f = KDDTest.drop(["isa"], axis=1, inplace=True)
    class_mapping = {'attack': 0, 'normal': 1}
    Y_Train = KDDTrain_is_y.map(class_mapping)
    Y_Test = KDDTest_is_y.map(class_mapping)
#    Y_Train = np.asarray(Y_T)
#    Y_Test = np.asarray(Y_Te)


class preprocess_data:

    """    col_names_onehot = ["protocol_type","service","flag", "land", "wrong_fragment", "logged_in",
                            "root_shell", "is_host_login", "is_guest_login", "count", "srv_count",
                            "dst_host_count", "dst_host_srv_count", "type"]
        col_names_onehot_i = ["land", "wrong_fragment", "logged_in", "root_shell", "is_host_login",
                              "is_guest_login", "count", "srv_count", "dst_host_count", "dst_host_srv_count"]
        col_names_onehot_s = ["protocol_type","service","flag","type"]
        KDDAll_num = read_data.KDDAll_is.drop(col_names_onehot, axis=1)  #pd
        KDDAll_onehot_i = read_data.KDDAll_is[col_names_onehot_i]  #pd
        KDDAll_onehot_s = read_data.KDDAll_is[ col_names_onehot_s]  #pd

        num_pipeline = Pipeline([('scaling', StandardScaler())])
        cat_int_pipeline = Pipeline([('imputer', SimpleImputer(strategy = "constant", fill_value = 0)), ('onehoti', OneHotEncoder(categories='auto'))])
        cat_string_pipeline = Pipeline([('imputer', SimpleImputer(strategy = "constant", fill_value = "missing")), ('ordi', OrdinalEncoder()), ('onehots', OneHotEncoder(categories='auto'))])

        num_attribs = list(KDDAll_num)
        cat_i_attribs = list(KDDAll_onehot_i)
        cat_s_attribs = list(KDDAll_onehot_s)

        full_pipeline = ColumnTransformer([("num", num_pipeline, num_attribs),("cati", cat_int_pipeline, cat_i_attribs), ("cats", cat_string_pipeline, cat_s_attribs)])

        KDDAll_t = full_pipeline.fit_transform(read_data.KDDAll_is)

    """



    col_names_onehot = ["protocol_type","service","flag","type"]
    col_names_onehot_s = ["protocol_type","service","flag","type"]
    KDDAll_num = read_data.KDDAll_is.drop(col_names_onehot, axis=1)  #pd
    KDDAll_onehot_s = read_data.KDDAll_is[ col_names_onehot_s]  #pd

    num_pipeline = Pipeline([('scaling', StandardScaler())])
    cat_string_pipeline = Pipeline([('imputer', SimpleImputer(strategy = "constant", fill_value = "missing")), ('ordi', OrdinalEncoder()), ('onehots', OneHotEncoder(categories='auto'))])

    num_attribs = list(KDDAll_num)
    cat_s_attribs = list(KDDAll_onehot_s)

    full_pipeline = ColumnTransformer([("num", num_pipeline, num_attribs), ("cats", cat_string_pipeline, cat_s_attribs)])

    KDDAll_t = full_pipeline.fit_transform(read_data.KDDAll_is)

    X_Train_i = KDDAll_t[:read_data.KDDTrain_len]
    X_Test_i = KDDAll_t[read_data.KDDTrain_len:read_data.KDDTrain_len + read_data.KDDTest_len]

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
