import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.scss',
})
export class SurveyComponent{
  surveyData = {
    age: '',
    gender: '',
    education: '',
    sector: '',
    residenceDuration: '',
    mainTransport: '',
    trafficIssues: '',
    timeInTraffic: '',
    parkingEase: '',
    cityCenterParkingEase: '',
    illegalParking: '',
    undergroundParking: '',
    biggestTrafficProblem: '',
    trafficImprovements: '',
    bikeLanesSatisfaction: '',
    bikeLaneSafety: '',
    cleanlinessPublicTransport: '',
    publicTransportSufficiency: '',
    metroStationsNumber: '',
    preferBikeIfBetterInfrastructure: '',
    bikeImprovements: '',
    neighborhoodSatisfaction: '',
    legalConstruction: '',
    sidewalkSpace: '',
    roadSpace: '',
    sunCoveredAreas: '',
    benchesAvailability: '',
    illegalParkingMeasures: '',
    surveyEase: '',
    otherIssues: '',
    additionalExperience: ''
  };

  constructor(private router: Router) {} 

  currentRoute: string = '';

  ngOnInit(): void {
    this.currentRoute = this.router.url;
  }
  
  onSubmit(): void {
    console.log('Form submitted!', this.surveyData);
    this.router.navigate(['results'], { state: { surveyData: this.surveyData } });
  }

}
