import pandas as pd
import numpy as np
from datetime import datetime, timedelta

products = {
    "Milk": 40,
    "Bread": 30,
    "Eggs": 50,
    "Rice": 25,
    "Tomatoes": 20,
    "Chicken": 35,
    "Bananas": 25,
    "Cheese": 18,
    "Curd": 15,
    "Onions": 22
}

start_date = datetime(2024, 1, 1)
days = 120

data = []

for product, base in products.items():
    stock = np.random.randint(40, 100)

    for i in range(days):
        date = start_date + timedelta(days=i)

        # 📅 WEEKEND BOOST
        weekend_boost = 1.3 if date.weekday() >= 5 else 1.0

        # 🎉 FESTIVAL SPIKE (simulate every 30 days)
        festival_boost = 1.5 if i % 30 == 0 else 1.0

        # 🌦️ WEATHER RANDOM
        weather_boost = np.random.uniform(0.9, 1.2)

        demand = int(base * weekend_boost * festival_boost * weather_boost)

        # add noise
        demand += np.random.randint(-3, 3)

        demand = max(demand, 5)

        # update stock (simulate real depletion)
        stock = max(stock - demand, 10)

        # occasional restock (simulate shop behavior)
        if stock < 20:
            stock += np.random.randint(30, 80)

        data.append([
            date.strftime("%Y-%m-%d"),
            product,
            demand,
            stock
        ])

df = pd.DataFrame(data, columns=[
    "date", "product_name", "quantity_sold", "current_stock"
])

df.to_csv("sales.csv", index=False)

print("🔥 REAL DATASET GENERATED: sales.csv")