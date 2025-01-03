from flask import Flask, render_template, request, jsonify
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split

app = Flask(__name__)

# Load your dataset and train your model
data = pd.read_csv(r"C:\Users\rumjhum\Desktop\diabetes_project\diabetes.csv")
X = data.drop("Outcome", axis=1)
Y = data['Outcome']
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=42)
model = LogisticRegression(solver='saga', max_iter=2000)
model.fit(X_train, Y_train)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    input_data = request.get_json()
    prediction = model.predict([[input_data['pregnancies'], input_data['glucose'],
                                  input_data['bloodPressure'], input_data['skinThickness'],
                                  input_data['insulin'], input_data['bmi'],
                                  input_data['diabetesPedigreeFunction'], input_data['age']]])
    result = "You have diabetes." if prediction[0] == 1 else "You do not have diabetes."
    return jsonify({"message": result})

if __name__ == '__main__':
    app.run(debug=True)
