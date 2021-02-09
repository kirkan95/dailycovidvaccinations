# dailycovidvaccinations
A multi-line graph describing the number of daily COVID-19 vaccinations performed over time for the U.S. and China

I wanted to ensure that I learned how to create infographics in JavaScript. I ended up using a library called Chart.js.

Dataset from: https://www.kaggle.com/gpreda/covid-world-vaccination-progress
Tutorials used: https://www.youtube.com/watch?v=tc8DU14qX6I&ab_channel=TheCodingTrain
https://www.youtube.com/watch?v=RfMkdvN-23o&ab_channel=TheCodingTrain
Chart.js: https://www.chartjs.org/

The skills I used for this project were:

1. Importing a csv file
2. Cleaning and parsing a csv file
3. Creating functions that can pass variables into the Chart.js chart function
4. Editing and formatting a line graph in Chart.js
5. Going an extra step and adding a second line in the line graph

Some notes: 

- I hard coded the variables for the x values and y values outside the bounds of the functions for charting the graph and getting data from the csv. 
  In the future, and for cleanliness, that's something I'd change.
- This is hard coded for US and for China. In the original .csv file, there are dozens of countries represented, not just two. One interesting function that could
  be added would be letting the user select which two countries to compare. 
