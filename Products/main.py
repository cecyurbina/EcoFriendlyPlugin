from google.appengine.ext import webapp
from google.appengine.ext.webapp import util
from google.appengine.ext import db


class Product(db.Model):
  name = db.StringProperty(required=True)


class MainHandler(webapp.RequestHandler):
    def get(self):
        product = (self.request.get_all("product"))[0]
        self.response.out.write('Product name: ' + product)
        p = Product(name=product)
        p.put()


app = webapp.WSGIApplication([('/', MainHandler)],
                             debug=True)


def main():
    app = webapp.WSGIApplication([('/', MainHandler)],
                                 debug=True)
    util.run_wsgi_app(app)


if __name__ == '__main__':
    main()
