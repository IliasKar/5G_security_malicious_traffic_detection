{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "import pandas as pd\n",
    "import numpy as np\n",
    "import scipy as sp\n",
    "import matplotlib"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "import matplotlib.pyplot as plt\n",
    "from sklearn.pipeline import Pipeline\n",
    "from sklearn.preprocessing import MinMaxScaler\n",
    "from sklearn.preprocessing import StandardScaler\n",
    "from sklearn.preprocessing import OrdinalEncoder\n",
    "from sklearn.impute import SimpleImputer\n",
    "from sklearn.preprocessing import OneHotEncoder\n",
    "from sklearn.compose import ColumnTransformer\n",
    "import tensorflow as tf\n",
    "from tensorflow.keras.layers import Dense\n",
    "from tensorflow.keras.layers import LSTM\n",
    "from tensorflow.keras import optimizers\n",
    "from tensorflow.keras import models\n",
    "from tensorflow.keras import layers\n",
    "from tensorflow.keras import wrappers\n",
    "from tensorflow.keras import initializers\n",
    "from tensorflow.keras import regularizers\n",
    "from tensorflow.keras import losses\n",
    "from scipy.stats import reciprocal\n",
    "from sklearn.model_selection import RandomizedSearchCV\n",
    "from tensorflow.keras.wrappers.scikit_learn import KerasClassifier\n",
    "from sklearn.metrics import classification_report\n",
    "from sklearn.metrics import mean_squared_error\n",
    "import time\n",
    "from pickle import load"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "attack_types = {\n",
    "        'normal': 'normal',\n",
    "\n",
    "        'back': 'DoS',\n",
    "        'land': 'DoS',\n",
    "        'neptune': 'DoS',\n",
    "        'pod': 'DoS',\n",
    "        'smurf': 'DoS',\n",
    "        'teardrop': 'DoS',\n",
    "        'mailbomb': 'DoS',\n",
    "        'apache2': 'DoS',\n",
    "        'processtable': 'DoS',\n",
    "        'udpstorm': 'DoS',\n",
    "\n",
    "        'ipsweep': 'Probe',\n",
    "        'nmap': 'Probe',\n",
    "        'portsweep': 'Probe',\n",
    "        'satan': 'Probe',\n",
    "        'mscan': 'Probe',\n",
    "        'saint': 'Probe',\n",
    "\n",
    "        'ftp_write': 'R2L',\n",
    "        'guess_passwd': 'R2L',\n",
    "        'imap': 'R2L',\n",
    "        'multihop': 'R2L',\n",
    "        'phf': 'R2L',\n",
    "        'spy': 'R2L',\n",
    "        'warezclient': 'R2L',\n",
    "        'warezmaster': 'R2L',\n",
    "        'sendmail': 'R2L',\n",
    "        'named': 'R2L',\n",
    "        'snmpgetattack': 'R2L',\n",
    "        'snmpguess': 'R2L',\n",
    "        'xlock': 'R2L',\n",
    "        'xsnoop': 'R2L',\n",
    "        'worm': 'R2L',\n",
    "\n",
    "        'buffer_overflow': 'U2R',\n",
    "        'loadmodule': 'U2R',\n",
    "        'perl': 'U2R',\n",
    "        'rootkit': 'U2R',\n",
    "        'httptunnel': 'U2R',\n",
    "        'ps': 'U2R',\n",
    "        'sqlattack': 'U2R',\n",
    "        'xterm': 'U2R'\n",
    "}\n",
    "\n",
    "\n",
    "is_attack = {\n",
    "        \"DoS\":\"attack\",\n",
    "        \"R2L\":\"attack\",\n",
    "        \"U2R\":\"attack\",\n",
    "        \"Probe\":\"attack\",\n",
    "        \"normal\":\"normal\"\n",
    "}\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "kdd_path_pkl = \"NSL_KDD/\"\n",
    "kdd_path = \"NSL_KDD/\""
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "class read_data:\n",
    "    col_names = [\"duration\",\"protocol_type\",\"service\",\"flag\",\"src_bytes\",\n",
    "        \"dst_bytes\",\"land\",\"wrong_fragment\",\"urgent\",\"hot\",\"num_failed_logins\",\n",
    "        \"logged_in\",\"num_compromised\",\"root_shell\",\"su_attempted\",\"num_root\",\n",
    "        \"num_file_creations\",\"num_shells\",\"num_access_files\",\"num_outbound_cmds\",\n",
    "        \"is_host_login\",\"is_guest_login\",\"count\",\"srv_count\",\"serror_rate\",\n",
    "        \"srv_serror_rate\",\"rerror_rate\",\"srv_rerror_rate\",\"same_srv_rate\",\n",
    "        \"diff_srv_rate\",\"srv_diff_host_rate\",\"dst_host_count\",\"dst_host_srv_count\",\n",
    "        \"dst_host_same_srv_rate\",\"dst_host_diff_srv_rate\",\"dst_host_same_src_port_rate\",\n",
    "        \"dst_host_srv_diff_host_rate\",\"dst_host_serror_rate\",\"dst_host_srv_serror_rate\",\n",
    "        \"dst_host_rerror_rate\",\"dst_host_srv_rerror_rate\",\"label\", \"difficulty_level\"]\n",
    "\n",
    "    KDDTrain = pd.read_csv(kdd_path+\"KDDTrain+.txt\",names = col_names,)\n",
    "    KDDTest = pd.read_csv(kdd_path+\"KDDTest+.txt\",names = col_names,)\n",
    "\n",
    "    KDDAll = pd.concat([KDDTrain, KDDTest])\n",
    "\n",
    "    kdd_diff_level_all = KDDAll[\"difficulty_level\"].copy()\n",
    "    kdd_diff_level_train = KDDTrain[\"difficulty_level\"].copy()\n",
    "    kdd_diff_level_test = KDDTest[\"difficulty_level\"].copy()\n",
    "\n",
    "    KDDAll = KDDAll.drop(\"difficulty_level\", axis = 1)\n",
    "\n",
    "    KDDTrain.to_csv(kdd_path_pkl+\"KDDAll+.csv\")\n",
    "\n",
    "    KDDTrain_len = KDDTrain.shape[0]\n",
    "    KDDTest_len = KDDTest.shape[0]\n",
    "\n",
    "    KDDAll[\"type\"] = KDDAll.label.map(lambda x: attack_types[x])\n",
    "    KDDAll[\"isa\"] = KDDAll.type.map(lambda x: is_attack[x])\n",
    "\n",
    "    KDDTrain[\"type\"] = KDDTrain.label.map(lambda x: attack_types[x])\n",
    "    KDDTrain[\"isa\"] = KDDTrain.type.map(lambda x: is_attack[x])\n",
    "\n",
    "    KDDTest[\"type\"] = KDDTest.label.map(lambda x: attack_types[x])\n",
    "    KDDTest[\"isa\"] = KDDTest.type.map(lambda x: is_attack[x])\n",
    "\n",
    "    kdd_attack_type_group = KDDAll.groupby(\"type\")\n",
    "    kdd_is_attack_group = KDDAll.groupby(\"isa\")\n",
    "\n",
    "    kdd_attack_type_group.type.count()\n",
    "    kdd_is_attack_group[\"isa\"].count()\n",
    "\n",
    "    KDDAll_is = KDDAll.copy()\n",
    "    KDDAll_type = KDDAll.copy()\n",
    "\n",
    "    KDDAll_is_y = KDDAll[\"isa\"].copy()\n",
    "    KDDAll_is.drop([\"label\", \"isa\"], axis=1, inplace=True)\n",
    "    KDDAll_type_y = KDDAll[\"type\"].copy()\n",
    "    KDDAll_type.drop([\"label\", \"type\"], axis=1, inplace=True)\n",
    "\n",
    "    KDDTrain_is_y = KDDTrain[\"isa\"].copy()\n",
    "    KDDTrain_type_y = KDDTrain[\"type\"].copy()\n",
    "\n",
    "    KDDTest_is_y = KDDTest[\"isa\"].copy()\n",
    "    KDDTest_type_y = KDDTest[\"type\"].copy()\n",
    "\n",
    "    class_mapping = {'attack': 0, 'normal': 1}\n",
    "\n",
    "    Y_Train = KDDTrain_is_y.map(class_mapping)\n",
    "    Y_Test = KDDTest_is_y.map(class_mapping)\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "class preprocess_data:\n",
    "\n",
    "    col_names_onehot = [\"protocol_type\",\"service\",\"flag\",\"type\"]\n",
    "    col_names_onehot_s = [\"protocol_type\",\"service\",\"flag\",\"type\"]\n",
    "    KDDAll_num = read_data.KDDAll_is.drop(col_names_onehot, axis=1)  #pd\n",
    "    KDDAll_onehot_s = read_data.KDDAll_is[ col_names_onehot_s]  #pd\n",
    "\n",
    "    num_pipeline = Pipeline([('scaling', StandardScaler())])\n",
    "    cat_string_pipeline = Pipeline([('imputer', SimpleImputer(strategy = \"constant\", fill_value = \"missing\")), ('ordi', OrdinalEncoder()), ('onehots', OneHotEncoder(categories='auto'))])\n",
    "\n",
    "    num_attribs = list(KDDAll_num)\n",
    "    cat_s_attribs = list(KDDAll_onehot_s)\n",
    "\n",
    "    full_pipeline = ColumnTransformer([(\"num\", num_pipeline, num_attribs), (\"cats\", cat_string_pipeline, cat_s_attribs)])\n",
    "\n",
    "    KDDAll_t = full_pipeline.fit_transform(read_data.KDDAll_is)\n",
    "\n",
    "    X_Train_i = KDDAll_t[:read_data.KDDTrain_len]\n",
    "    X_Test_i = KDDAll_t[read_data.KDDTrain_len:read_data.KDDTrain_len + read_data.KDDTest_len]\n",
    "\n",
    "    X_Train = np.expand_dims(X_Train_i, axis=1)\n",
    "    X_Test = np.expand_dims(X_Test_i, axis=1)\n",
    "    Y_Train = read_data.Y_Train\n",
    "    Y_Test = read_data.Y_Test\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "import tensorflow as tf\n",
    "from tensorflow.keras.layers import Dense\n",
    "from tensorflow.keras.layers import LSTM\n",
    "from tensorflow.keras import optimizers\n",
    "from tensorflow.keras import models\n",
    "from tensorflow.keras import layers\n",
    "from tensorflow.keras import wrappers\n",
    "from tensorflow.keras import initializers\n",
    "from tensorflow.keras import regularizers\n",
    "from tensorflow.keras import losses\n",
    "from scipy.stats import reciprocal\n",
    "from sklearn.model_selection import RandomizedSearchCV\n",
    "from tensorflow.keras.wrappers.scikit_learn import KerasClassifier\n",
    "from sklearn.metrics import classification_report\n",
    "from sklearn.metrics import mean_squared_error\n",
    "import time\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "input_dim = preprocess_data.X_Train.shape[2]\n",
    "print(\"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\")\n",
    "print(input_dim)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "classes = 2\n",
    "loop_back =1\n",
    "hidden_encoder_dim = input_dim\n",
    "hidden_decoder_dim = input_dim"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "def build_model(learning_rate, hidden_layers, initiali):\n",
    "    model = models.Sequential([\n",
    "    layers.LSTM(hidden_layers, input_shape=(loop_back,input_dim)),\n",
    "    layers.Dense(1)])\n",
    "    adamopt = optimizers.Adam(learning_rate=learning_rate, beta_1=0.9, beta_2=0.999, amsgrad=False)\n",
    "    model.compile(loss=\"binary_crossentropy\", optimizer=adamopt)\n",
    "    return model\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "keras_reg = wrappers.scikit_learn.KerasClassifier(build_model)\n",
    "\n",
    "param_distribs = {\"learning_rate\": reciprocal(0.0001, 0.0005), \"hidden_layers\":[1,2,4], \"initiali\":['glorot_uniform', 'he_uniform']\t}\n",
    "\n",
    "rnd_search_cv = RandomizedSearchCV(keras_reg, param_distribs, cv=5, scoring='accuracy', n_jobs=-1, error_score=1)\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "X_Train = preprocess_data.X_Train\n",
    "Y_Train = read_data.Y_Train\n",
    "\n",
    "X_Test = preprocess_data.X_Test\n",
    "Y_Test = read_data.Y_Test\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "batch_s = 2000\n",
    "epoches = 250\n",
    "ver = 2"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "rnd_search_cv.fit(X_Train, Y_Train, batch_size=batch_s, epochs=epoches, verbose=ver)"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "# NAD on EPC: Model is already pre-trained"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "Model : RNN LSTM Network with 4 hidden layers, Adam optimizer and binary-crossentropy loss function -\n",
    "Epochs: 250 - \n",
    "Batch size : 2000 connections per step "
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Start Prediction"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "pred_test = rnd_search_cv.predict(X_Test)"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "Classification report ready"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {
    "scrolled": true
   },
   "outputs": [],
   "source": [
    "print(\"Classclassification_report:               \\n\", classification_report(Y_Test, pred_test))"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "print(\"Best estimator: \\n\", rnd_search_cv.best_estimator_)\n",
    "print(\"Best score: \\n\", rnd_search_cv.best_score_)\n",
    "print(\"Best params: \\n\", rnd_search_cv.best_params_)\n",
    "print(\"Refit time: \\n\", rnd_search_cv.refit_time_)"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "Plot Confusion Matrix Graph"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "from sklearn.metrics import confusion_matrix\n",
    "cm = confusion_matrix(Y_Test, pred_test)\n",
    "import itertools\n",
    "classes = ['attack','normal']\n",
    "plt.figure()\n",
    "plt.imshow(cm, interpolation='nearest', cmap=plt.cm.Blues)\n",
    "plt.title('Confusion matrix')\n",
    "plt.colorbar()\n",
    "tick_marks = np.arange(len(classes))\n",
    "plt.xticks(tick_marks, classes, rotation=45)\n",
    "plt.yticks(tick_marks, classes)\n",
    "print(cm)\n",
    "thresh = cm.max() / 2.\n",
    "for i, j in itertools.product(range(cm.shape[0]), range(cm.shape[1])):\n",
    "    plt.text(j, i, cm[i, j].round(4),\n",
    "             horizontalalignment=\"center\",\n",
    "             color=\"white\" if cm[i, j] > thresh else \"black\")\n",
    "\n",
    "plt.tight_layout()\n",
    "plt.ylabel('True label')\n",
    "plt.xlabel('Predicted label')\n",
    "plt.show()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": []
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.7.3"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 2
}
