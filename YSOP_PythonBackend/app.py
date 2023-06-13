from flask import Flask, request, render_template
import pandas as pd
from src.forecast_pipeline import get_forecast

application = Flask(__name__)
app = application

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/forecast', methods= ['GET', 'POST'])
def forecast():
    if request.method == 'GET':
        return render_template('index.html')
    else:
        period = request.form.get('period')
        future_sales = get_forecast(period)
        return render_template('home.html', forecast = future_sales['yhat1'].head(1))


if __name__ == "__main__":
    app.run(host = "0.0.0.0", debug = True)