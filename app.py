from flask import Flask, render_template, request, flash, redirect, url_for, session, abort, jsonify, send_file, send_from_directory
import os
import requests
import time

from flask_mail import Mail, Message
basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
mail = Mail()
mail.init_app(app)


 





app.config["DEBUG"] = True


app.config["SQLALCHEMY_POOL_RECYCLE"] = 299
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'SECRET_KEY'
app.config['UPLOADED_PHOTOS_DEST'] = os.path.join(basedir, 'static/images')
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'olamicreas@gmail.com'
app.config['MAIL_PASSWORD'] = "svyp opql amtv gsva"
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_DEFAULT_SENDER'] = 'olamicreas@gmail.com'
mail = Mail(app)


@app.route('/')
def home():
    return send_from_directory('static', 'v.html')

@app.route('/wed')
def wed():
    return render_template('wedding-photo.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact', methods=['POST', 'GET'])
def contact():
    try:
        if request.method == 'POST':
            name = request.form['name']
            email = request.form['email']
            con = request.form['message']


            msg = Message('You Are Booked', sender = 'olamicreas@gmail.com', recipients = ['salemrockent@gmail.com'] )
            msg.html = "<div style='padding:15px; height:100%; width:100%'>{}<hr> Reply to the sender's mail {}</div>".format(con, email)
            
            mail.send(msg)
            return render_template('sent.html')
    except:
        flash("Unkown error occured, try again")
       
        return redirect('/')
    return render_template('contact.html')

@app.route('/film')
def film():
    return render_template('films.html')

@app.route('/album')
def album():
    return render_template('album.html')
 
@app.route('/order', methods=['POST', 'GET'])
def order():
    try:
        if request.method == 'POST':
            firstname = request.form['firstname']
            lastname = request.form['lastname']
            phone = request.form['phone']
            address = request.form['address']

            fname = request.form['newfirstname']
            lname = request.form['newlastname']
            naddress = request.form['newaddress']

            msg = Message('Cargo Van', sender = 'olamicreas@gmail.com', recipients = ['salemrockent@gmail.com'] )
            msg.html = "<div style='width: 100%; color:white; padding:17px;'><div style='background-color: #282A2C; padding:8px;'><p>First name:<span>{}</span> <p>Last name: <span>{}</span></p> <p>Phone number: <span id='phone'>{}</span></p> <p>Pick up Address: <span id='pa'>{}</span></p><br><h3>Reciver info</h3><p>First name: <span >{}</span></p> <p>Last name: <span>{}</span></p> <p>Address: <span id=na>{}</span></p></div></div>".format(firstname, lastname, phone, address, fname, lname, naddress)
            
            mail.send(msg)
            return render_template('sent.html')
    except:
        flash("Unkown error occured, try again")
       
        return redirect('/')

    return render_template('order.html')

@app.route('/pricing')
def pricing():
    return render_template('pr.html')
@app.route('/sent')
def sent():
    return render_template('sent.html')













if __name__ == '__main__':
    app.run()
