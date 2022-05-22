
Conversation opened. 8 messages. All messages read.

Skip to content
Using Gmail with screen readers
4 of 1,843
IMPORTANT : OpenHack 2022
Inbox

OpenSource Hack
Sun, 15 May, 03:20 (7 days ago)
Cher(e) candidat, Chaque année, l’école nationale des sciences appliquées de Khouribga organise l’évènement Open Source Days du département informatique qui reg
5

Ahmed Jadani <ahmed4star@gmail.com>
Attachments
Tue, 17 May, 15:14 (5 days ago)
to OpenSource

This is our prototype: https://www.figma.com/file/UzSCxtq17G8UjdsIAfsXyX/F'triq?node-id=0%3A1
and i will attach the slides and the codes (the algorithm is not fully finished yet)

5 Attachments

Ahmed Jadani <ahmed4star@gmail.com>
Tue, 17 May, 16:14 (5 days ago)
to OpenSource

here is the website: https://f-triq.vercel.app/

enter any email and password and you will be inside the platform.
import sys
import os
import time
import math
import numpy as np
import matplotlib as mpl
import matplotlib.pyplot as plt


bus_num = 10
cost_per_km = 3
bus_capacity = 16
num_stations = 8
num_schools = 2


class Student:
    def __init__(self, name, home, school):
        self.name = name
        self.home = home
        self.school = school
        self.bus = None
        self.visit = None

    def __str__(self):
        return self.name + " " + str(self.home) + " " + str(self.school) + " " + str(self.bus) + " " + str(self.visit)

class Bus:
    def __init__(self, capacity, cost):
        self.capacity = capacity
        self.cost = cost
        self.students = []
        self.distance = 0

    def __str__(self):
        return str(self.capacity) + " " + str(self.cost) + " " + str(self.students) + " " + str(self.distance)

class Station:
    def __init__(self, name, distance):
        self.name = name
        self.distance = distance
        self.students = []
        self.visited = False

    def __str__(self):
        return self.name + " " + str(self.distance) + " " + str(self.students) + " " + str(self.visited)

class School:
    def __init__(self, name, distance):
        self.name = name
        self.distance = distance
        self.students = []
        self.visited = False

    def __str__(self):
        return self.name + " " + str(self.distance) + " " + str(self.students) + " " + str(self.visited)


def read_locations(filename):
    stations = []
    schools = []
    with open(filename) as f:
        for line in f:
            if line.startswith("station"):
                x, y = line.split()[1:]
                stations.append(Station(line.split()[0], (float(x), float(y))))
            elif line.startswith("school"):
                x, y = line.split()[1:]
                schools.append(School(line.split()[0], (float(x), float(y))))
            else :
                print("Error: wrong format in the file")
                sys.exit(1)
    return stations, schools


stations, schools = read_locations("locations.txt")




for i in range(num_stations):
    stations[i].students.append(Student("student"+str(i), stations[i].distance, None))


for i in range(num_stations):
    stations[i].students.append(Student("student"+str(i), stations[i].distance, None))
    print(f'{stations[i].name} {stations[i].distance[0]} {stations[i].distance[1]}')


# matplotlib
# stations as a red circle, schools as a blue circle
def plot_map(stations, schools):
    x = [station.distance[0] for station in stations]
    y = [station.distance[1] for station in stations]
    plt.scatter(x, y, c='r', marker='o')
    x = [school.distance[0] for school in schools]
    y = [school.distance[1] for school in schools]
    plt.scatter(x, y, c='b', marker='o')
    plt.show()

# visualize
plot_map(stations, schools)
print('==========================')
# print the distance between station1 and station2
#print(f'{stations[0].name} {stations[1].name} {stations[0].distance[0] - stations[1].distance[0]} {stations[0].distance[1] - stations[1].distance[1]}')

# algorithm(stations, schools, bus_num, cost_per_km, bus_capacity, num_stations, num_schools)


## saved for later : 

# def Dijkstra(stations, schools, num_stations, num_schools):
#     for station in stations:
#         station.visited = False
#         station.distance = math.inf
#     for school in schools:
#         school.visited = False
#         school.distance = math.inf

#     stations[0].distance = 0
#     while not stations[0].visited:
#         # find the station with the smallest distance
#         current_station = stations[0]
#         for station in stations:
#             if not station.visited and station.distance < current_station.distance:
#                 current_station = station
#         current_station.visited = True
#         for station in stations:
#             if not station.visited:
#                 # find the distance from the current station to the station
#                 distance = math.sqrt((current_station.distance[0] - station.distance[0])**2 + (current_station.distance[1] - station.distance[1])**2)
#                 # if the distance is smaller than the current distance, update the distance
#                 if distance < station.distance:
#                     station.distance = distance
#                     station.previous = current_station
#     # find the distance from the last station to the school
#     for school in schools:
#         distance = math.sqrt((stations[num_stations - 1].distance[0] - school.distance[0])**2 + (stations[num_stations - 1].distance[1] - school.distance[1])**2)
#         if distance < school.distance:
#             school.distance = distance
#             school.previous = stations[num_stations - 1]
#     # print the distance from the station to the school
#     for school in schools:
#         print(f'{school.name} {school.distance}')
#     # print the distance from the station to the school
#     for station in stations:
#         print(f'{station.name} {station.distance}')

# Dijkstra(stations, schools, num_stations, num_schools)
    
SBRP.py
Displaying SBRP.py.


## i didn't finish the algorithm because the time wasn't enough, this has done in less than 10h. but the judge didn't even bother asking about the code or the algorithm.
# as a review of the Hackathon i will give ENSA Khouribga judges: 1/10 
# for the first time I see the organizers are the same participants in the competition just wow!. for the orginizers: 2/10
# the food: 3/10
