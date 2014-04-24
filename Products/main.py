from google.appengine.ext import webapp
from google.appengine.ext.webapp import util

class MainHandler(webapp.RequestHandler):
    def get(self):
        to = (self.request.get_all("to"))[0]
        content = (self.request.get_all("content"))[0]
        self.response.out.write('Para: ' + to)
        self.response.out.write('<br>Correo enviado')


app = webapp.WSGIApplication([('/', MainHandler)],
                             debug=True)

def main():
    app = webapp.WSGIApplication([('/', MainHandler)],
                                 debug=True)
    util.run_wsgi_app(app)


if __name__ == '__main__':
    main()
