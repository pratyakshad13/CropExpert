from fastapi import FastAPI,File,UploadFile,WebSocket
from io import BytesIO
from PIL import Image
import numpy as np
import tensorflow as tf
import uvicorn
import pickle
from pydantic import BaseModel
import serial
import sklearn
from fastapi.middleware.cors import CORSMiddleware

ML_MODEL= pickle.load(open("../ML_mdl/randomForest.pkl","rb"))
app = FastAPI()


origins = ["http://localhost", "http://localhost:3000"]  # Update with your React app's URL

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# ser = serial.Serial('COM7',115200,timeout=1)
# @app.get("./read/")
# async def read_data():
#     if(ser.is_open):
#         arduino_data = ser.readline().decode('utf-8').strip()
#         return {"data":arduino_data}
#     else :
#         return {"error":"Serial port is not open"}
# @app.post("/sensor")
# async def sensor_data(data):
#     pass
# clients = set()
# arduino = serial.Serial('COM3', 9600)
# @app.websocket("/ws")
# async def websocket_endpoint(websocket: WebSocket):
#     await websocket.accept()
#     clients.add(websocket)

#     try:
#         while True:
#             # Read data from Arduino
#             sensor_value = arduino.readline().decode().strip()

#             # Broadcast the sensor value to all connected clients
#             for client in clients:
#                 await client.send_text(f"Sensor Value: {sensor_value}")

#     except WebSocketDisconnect:
#         clients.remove(websocket)
    
MODEL= tf.keras.models.load_model("1")
CLASS_NAMES=["Early Blight","Late Blight","Healthy"]
@app.get("/ping")
async def ping():
    return "hello working"
def read_file_as_image(data) ->np.ndarray:
    image = np.array(Image.open(BytesIO(data)))
    return image
async def receive_sensor_data(data: str):
    print(f"Received sensor data: {data}")
    return {"message": "Data received successfully"}
# @app.post("/ml_model")
# async def ml_data(values):
#     np_arr=np.array(values).reshape(1, -1)
#     ret= ML_MODEL.predict(np_arr)   
#     return {"crop":ret}





    
@app.post("/predict")
async def predict(
    file: UploadFile =File(...)
    ):
    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image,0)
    image_batch = tf.image.resize(image, (256, 256)) / 255.0
    predictions=MODEL.predict(img_batch)
    predict_class = CLASS_NAMES[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])
    return{
        'class':predict_class,
        'confidence':float(confidence)
    }
    
if __name__ =="__main__":
    uvicorn.run(app, host='localhost' ,port=8000)