import pandas as pd
import pickle
from neuralprophet import Neuralprophet

def get_forecast(period: int)->pd.DataFrame:
    with open('model_binary\model.pkl', 'rb') as f:
        model = pickle.load(f)
    
    # Load the dataset
    upd_data = pd.read_csv('artifacts\datevssales.csv')

    # Generate dates for the next week
    future = model.make_future_dataframe(upd_data, periods=period)

    # Create a DataFrame with the future dates
    # df_future = pd.DataFrame({'ds': future})

    # Make predictions for the future dates
    forecast = model.predict(future)
    return forecast