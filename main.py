from flask import Flask, render_template, request
import requests
import json
import markdown

app = Flask(__name__)

@app.route('/guide')
def guide():
    return render_template('guide.html')
  
@app.route('/', methods=['GET', 'POST'])
def home():
    response = ''
    if request.method == 'POST':
        url = 'http://panel.magicgames.mooo.com:1037/api'
        api_key = request.form.get('api_key')
        question = request.form.get('question')
        model = request.form.get('model')
        product = request.form.get('product')
        internet = request.form.get('internet')

        data = {
            'api_key': api_key,
            'model': model,
            'question': question,
        }

        if model == 'amazon':
            data['product'] = product
        elif model == 'chat':
            data['internet'] = internet

        #response = requests.post(url, json=data).json()
        api_response = requests.post(url, json=data).json()

        if 'error' in api_response:
            response = api_response['error']
        else:
            response = api_response['answer']
        response = markdown.markdown(response)
        print(response)
    return render_template('home.html', response=response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False)
