import streamlit as st
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# Load your diabetes dataset
data = pd.read_csv(r"C:\Users\rumjhum\Desktop\diabetes_project\diabetes.csv")

# Split data into features and target
X = data.drop("Outcome", axis=1)
Y = data['Outcome']

# Split into training and testing sets
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=42)

# Scale the features (optional but often improves model performance)
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# Create and train the model
model = LogisticRegression(solver='saga', max_iter=2000)
model.fit(X_train, Y_train)

# Define a function to make predictions
def predict_diabetes(pregnancies, glucose, blood_pressure, skin_thickness, insulin, bmi, diabetes_pedigree_function, age):
    input_data = [[pregnancies, glucose, blood_pressure, skin_thickness, insulin, bmi, diabetes_pedigree_function, age]]
    input_data_scaled = scaler.transform(input_data)  # Scale the input data
    prediction = model.predict(input_data_scaled)
    return prediction[0]

# Streamlit app layout
st.title("Diabetes Prediction App")

# User input for the features
pregnancies = st.number_input("Pregnancies", min_value=0, max_value=20)
glucose = st.number_input("Glucose", min_value=0, max_value=200)
blood_pressure = st.number_input("Blood Pressure", min_value=0, max_value=200)
skin_thickness = st.number_input("Skin Thickness", min_value=0, max_value=100)
insulin = st.number_input("Insulin", min_value=0, max_value=1000)
bmi = st.number_input("BMI", min_value=0.0, max_value=100.0)
diabetes_pedigree_function = st.number_input("Diabetes Pedigree Function", min_value=0.0, max_value=2.5, step=0.01)
age = st.number_input("Age", min_value=0, max_value=120)

# Submit button
if st.button("Submit"):
    # Print the input data for debugging
    st.write("Input Data:", [pregnancies, glucose, blood_pressure, skin_thickness, insulin, bmi, diabetes_pedigree_function, age])
    
    result = predict_diabetes(pregnancies, glucose, blood_pressure, skin_thickness, insulin, bmi, diabetes_pedigree_function, age)
    
    if result == 1:
        st.success("You have diabetes.")
    else:
        st.success("You do not have diabetes.")
