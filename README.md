# SmartStock AI — Retail Demand Intelligence Platform

SmartStock AI is a full-stack retail inventory intelligence platform designed to help stores reduce inventory waste, predict product demand, and optimize reorder decisions using AI-driven forecasting.

The system analyzes historical sales data and generates actionable business insights through an interactive dashboard built with React, FastAPI, PostgreSQL, and machine learning logic.

---

# Problem Statement

Retail businesses often face:

- Overstocking leading to inventory waste
- Understocking causing missed sales
- Poor demand visibility
- Manual reorder decisions
- Difficulty handling seasonal or festival demand spikes

SmartStock AI was built to simulate how modern retail systems use forecasting and analytics to support smarter inventory decisions.

---

# Features

- AI-based demand forecasting
- Inventory reorder optimization
- Waste risk analysis
- Priority alert engine
- Weather-aware forecasting adjustments
- Festival demand simulation
- Interactive KPI dashboard
- What-if scenario simulator
- AI-generated retail insights
- Real-time product risk monitoring

---

# Tech Stack

## Frontend
- React
- TypeScript
- TailwindCSS
- Axios
- Recharts

## Backend
- FastAPI
- PostgreSQL
- SQLAlchemy
- Pandas
- NumPy
- Scikit-learn

---

# System Architecture

User Uploads CSV Data
↓
FastAPI Backend Processes Sales Data
↓
Forecasting & Inventory Logic Engine
↓
Risk & Reorder Analysis
↓
PostgreSQL Storage
↓
React Dashboard Visualization

---

# Dashboard Modules

## Priority Action Center
Displays products that require urgent attention based on demand and inventory risk.

## KPI Dashboard
Shows:
- Forecast accuracy
- Reorder quantity
- Waste percentage
- Current stock
- Safety stock
- Demand trend

## Demand Forecast Graph
Visualizes predicted demand for the next 7 days.

## What-if Simulator
Allows simulation of:
- Festival demand spikes
- Weather impact scenarios

---

# Forecasting Logic

The forecasting system currently uses:

- Rolling average demand prediction
- Weather-based demand adjustment
- Festival demand multipliers
- Inventory safety stock calculations

The project focuses on practical business-oriented forecasting rather than complex experimental ML models.

---

# Future Improvements

- LSTM / Prophet forecasting integration
- Multi-store analytics
- Supplier management module
- Authentication & role-based access
- Cloud deployment optimization
- Real-time streaming analytics
- Automated reorder notifications

---


# How to Run Locally

## Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn main:app --reload
```

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# Deployment

Frontend deployed using:
- Vercel

Backend deployed using:
- Render

Database:
- PostgreSQL

---

# Learning Outcomes

This project helped me understand:

- Full-stack application development
- REST API development using FastAPI
- Database integration using PostgreSQL
- Inventory forecasting logic
- Business-oriented dashboard design
- React state management
- Deployment workflows
- Real-world software architecture

---

# Author

Helena Angel F  
B.Tech Artificial Intelligence and Data Science