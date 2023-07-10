from json import loads
from time import sleep
import m3u8
import requests
from m3u8 import parse
from urllib.parse import urljoin
import numpy as np
import av
from moviepy.video.io.VideoFileClip import VideoFileClip

# Establecer la duración máxima para considerar el video congelado (en segundos)
MAX_FREEZE_DURATION = 3

response = requests.get("https://devel.perseo.tv:4006/ws/ComprobacioGuiaTV.php")
ruta_video = "./"
file_name = "videoGoBack.ts"
canales_sin_video = []

if response.status_code == 200:
    respuesta = response.json()
    for elemento in respuesta:
        if isinstance(elemento, str):
            nombre_canal = elemento
        for ele in elemento:
            if len(ele) > 2:
                need = requests.get(ele)
                contenido = need.text
                playlist = m3u8.loads(contenido)
        
                tiene_audio = False
                
                # Comprobar si hay segmentos de audio en la lista de segmentos
                segmento = playlist.segments
                for segmento in playlist.segments:
                    rutaOnline = ele + "/" + segmento.uri
                    partes = rutaOnline.split("/")
                    posicionAEliminar = 5
                    partes.pop(posicionAEliminar)

                    rutaOnline = "/".join(partes)

                    responseVideo = requests.get(rutaOnline)
                    print(rutaOnline)
                    print(nombre_canal)
                    if responseVideo.status_code == 200:    

                        with open(file_name, 'wb') as f:
                            f.write(responseVideo.content)
                            video = VideoFileClip(file_name)
                            has_audio = video.audio != None
                            
                            if has_audio:
                                print ("El vídeo tiene audio")
                            else:
                                print ("No tiene audio")
                                canales_sin_video.append(nombre_canal)
                        sleep(5)
                        break
                    else:
                        print("No se ha podido descargar el video")
                        canales_sin_video.append(nombre_canal)
                        break

print("Los canales sin video son: " + str(canales_sin_video))