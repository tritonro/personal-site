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
   def print_pages(self): 
      for p in self.pages: 
         print(asdict(p))
   def render_site(self): 
      TEMPLATE_EXT = ".html.jinja"
      RENDER_EXT = ".html"
      RENDER_PATH = "public_html/test-renders/" 
      for p in self.pages: 
         template_filename = p.name + TEMPLATE_EXT
         temp = env.get_template(template_filename)
         temp = temp.render(site=self)
         render_filename = RENDER_PATH + p.name + RENDER_EXT
         with open(render_filename, 'w') as f:
            print(temp, file = f)


home = Page("index", "Home", "/")
about = Page("about", "About", '/src/about.html')
now = Page("now", "Now", '/src/now.html')
projects = Page("projects", "Projects", "/src/projects.html")
resume = Page("resume", "Resum&#233;", '/src/resume.html' )
my_site = Site([home, about, now, projects, resume])
my_site.render_site()
     
#env.filters['upperstring'] = upperstring


#any arguments to temp.render are called "context"

