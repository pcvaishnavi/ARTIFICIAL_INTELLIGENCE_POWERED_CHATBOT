from openai import OpenAI
from quart import (Quart, render_template,request,Blueprint,jsonify,make_response)

bp = Blueprint("routes",__name__,static_folder = "static",template_folder="static")

def create_app():
        app = Quart(__name__)
        app.register_blueprint(bp)
        app.config['MAX_CONTENT_LENGTH']=50 * 1024 * 1024
        return app 


@bp.route('/')
async def index():
    return await render_template('chatbot.html')


@bp.before_request
def enforce_hsts():
    if request.is_secure:
        response = make_response()
        response.headers['Permissions-Policy'] = ''
        response.headers['Strict-Transport-Security'] = ""
        response.headers['X-Content-Type-Options'] = ''
        response.headers['X-Frame-Options'] = ''
        response.headers["Content-Security-Policy"] = "';"
        response.headers["Referrer-Policy"] = ""
        response.headers["mode"] = ""
        return response

def get_reponse(text):
        # text = input()
        
        client = OpenAI(
                organization = "",
                api_key = "",
                project = ""
                )

        completion = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {
                    "role": "user",
                    "content": text
                }
            ]
        )

        return completion.choices[0].message

@bp.route("/chatbot",methods=["POST"])
async def chatbot_response():
        try:
                request_json = await request.get_json()
                print(request)
                # print("-------------------------------------------------------------------",request_json)
                response = get_reponse(request_json.get('prompt'))
                # print("--------------------------------------------------------------", response.content)
                return jsonify ({"bot_response":response.content})
        except Exception as e:
              print(e)
              return e