import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nlp',
  templateUrl: './nlp.component.html',
  styleUrls: ['./nlp.component.css']
})
export class NLPComponent implements AfterViewInit {
  imageSource: String;
  startButtonValue: String;
  response: String;
  started: Boolean = false;
  analysis: Boolean = false;
  yourImage: String;


  @ViewChild('cmp') sentimentResponse;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
      this.startButtonValue = "Start";
      this.response = "starting value";
  }

   ngAfterViewInit() {
      this.sentimentResponse.nativeElement.innerHTML = 'Whale!';
    }

  start() {

       this.started = true;
       this.generateNewInkblotSrc();

       const loadAwsSdkScript = document.createElement('script');
       loadAwsSdkScript.src = 'https://sdk.amazonaws.com/js/aws-sdk-2.853.0.min.js'; // URL for aws-sdk
       loadAwsSdkScript.id = 'load-aws-sdk';
       document.body.appendChild(loadAwsSdkScript);

        window.setTimeout(function(){
        const configureAwsSdkScript = document.createElement('script');
        configureAwsSdkScript.id = 'configure-aws-sdk';
        configureAwsSdkScript.text = 'AWS.config.credentials = new AWS.CognitoIdentityCredentials({IdentityPoolId: "us-west-2:459f4edd-27a2-4d2a-b3d3-7fc0af7fae6a"}); AWS.config.update({region: "us-west-2"});'
        document.body.appendChild(configureAwsSdkScript);}, 1500);
    }

    onClickSubmit(data) {
          this.analysis = false;
          this.yourImage = '';
          this.detectSentiment(data.sentiment);

          setTimeout(() => {
            console.log(this.sentimentResponse.nativeElement.innerHTML);
            this.analysis=true;
            this.response = this.sentimentResponse.nativeElement.innerHTML;
            var sent = JSON.parse(this.sentimentResponse.nativeElement.innerHTML);
            var mixed = sent.SentimentScore.Mixed;
            var neutral = sent.SentimentScore.Neutral;
            var positive = sent.SentimentScore.Positive;
            var negative = sent.SentimentScore.Negative;

            if (positive > 0.95)
            {
              this.yourImage = 'assets/p_o_95.jpg';
            }
            else if (positive > 0.85)
            {
              this.yourImage = 'assets/p_o_85.jpg';
            }
            else if (positive > 0.70)
            {
              this.yourImage = 'assets/p_o_70.jpg';
            }
            else if (positive > 0.60)
            {
              this.yourImage = 'assets/p_o_60.png';
            }
            else if (positive > 0.50)
            {
              this.yourImage = 'assets/p_o_50.png';
            }
            else if (negative > 0.95)
            {
              this.yourImage = 'assets/n_o_95.png';
            }
            else if (negative > 0.85)
            {
              this.yourImage = 'assets/n_o_85.JPG';
            }
            else if (negative > 0.70)
            {
              this.yourImage = 'assets/n_o_70.PNG';
            }
            else if (negative > 0.60)
            {
              this.yourImage = 'assets/n_o_60.jpeg';
            }
            else if (negative > 0.50)
            {
              this.yourImage = 'assets/n_o_50.jpeg';
            }
            else if (positive > negative)
            {
              this.yourImage = 'assets/n_p.png';
            }
            else
            {
              this.yourImage = 'assets/n_n.jpeg';
            }


          }, 3000);
    }

    processSentiment() {
      //console.log(this.sentimentResponse.nativeElement.innerHTML);

      var sent = JSON.parse(this.sentimentResponse.nativeElement.innerHTML);

      console.log(sent.SentimentScore.Mixed);
    }


    generateNewInkblotSrc()
    {
        var newSource = 'assets/blot' + Math.floor(Math.random() * (10) + 1) + '.png';

        while (this.imageSource == newSource)
        {
            newSource = 'assets/blot' + Math.floor(Math.random() * (10) + 1) + '.png';
        }
        this.imageSource = newSource;

        this.analysis = false;
    }

    detectSentiment(description: String) {
        const detectSentimentScript = document.createElement('script');
        detectSentimentScript.id = 'detect-sentiment';
        var scriptText = 'var params = {"LanguageCode": "en","Text": "' + description + '"}; var comprehend = new AWS.Comprehend(); comprehend.detectSentiment(params, function(err, data) {if (err) console.log(err, err.stack); else document.getElementById("sentiment-response").textContent = JSON.stringify(data);});'
        console.log(scriptText);
        detectSentimentScript.text = scriptText;
        document.body.appendChild(detectSentimentScript);
    }
}
