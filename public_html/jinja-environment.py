import jinja2
from collections import namedtuple
from dataclasses import dataclass, asdict

loader = jinja2.FileSystemLoader('public_html/templates') #relative path
env = jinja2.Environment(autoescape=True, loader=loader)

@dataclass(frozen=True)
class Page: 
   name: "str"
   display_name: "str"
   link: "str"
   def get_dp_name(self): 
      return self.display_name
   def get_link(self): 
      return self.link

@dataclass
class Site: 
   pages : list[Page]
   def printPages(self): 
      for p in self.pages: 
         print(asdict(p))

home = Page("home", "Home", "/")
about = Page("about", "About", '/src/about.html')
now = Page("now", "Now", '/src/now.html')
projects = Page("projects", "Projects", "/src/projects.html")
resume = Page("resume", "Resum&#233;", '/src/resume.html' )
my_site = Site([home, about, now, projects, resume])
     
#env.filters['upperstring'] = upperstring
temp = env.get_template('index.html.jinja')
#any arguments to temp.render are called "context"
home = temp.render(site=my_site)
with open("public_html/test-renders/index.html", 'w') as f:
    print(home, file = f)