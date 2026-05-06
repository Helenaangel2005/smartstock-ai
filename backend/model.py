import pandas as pd
from prophet import Prophet

# store models
models = {}

def train_models():
    df = pd.read_csv("data/sales.csv")

    product_ids = df["product_id"].unique()

    for pid in product_ids:
        product_df = df[df["product_id"] == pid][["date", "sales"]]

        product_df = product_df.rename(columns={
            "date": "ds",
            "sales": "y"
        })

        model = Prophet()
        model.fit(product_df)

        models[pid] = model


def predict(product_id):
    model = models.get(product_id)

    if model is None:
        return None

    future = model.make_future_dataframe(periods=7)
    forecast = model.predict(future)

    result = forecast.tail(7)["yhat"].tolist()

    return [int(x) for x in result]