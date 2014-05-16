from google.appengine.ext import webapp
from google.appengine.ext.webapp import util
from google.appengine.ext import db


class Product(db.Model):
  name = db.StringProperty(required=True)


class MainHandler(webapp.RequestHandler):
    def get(self):
        product = (self.request.get_all("product"))[0]
        s = Product.all()
        s.filter("name =", product)
        if s.count() == 0: 
          p = Product(name=product)
          p.put()
          self.response.out.write("%s agregado" %product)
        else:
          self.response.out.write("%s ya existia" %product) 


app = webapp.WSGIApplication([('/', MainHandler)],
                             debug=True)


def main():
    app = webapp.WSGIApplication([('/', MainHandler)],
                                 debug=True)
    util.run_wsgi_app(app)


if __name__ == '__main__':
    main()
