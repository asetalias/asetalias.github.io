import json,os,re
from staticjinja import make_site

#Path to data folder
data_folder = os.path.abspath(os.path.dirname(__file__)) + '/data'
#Replace // and \ with /
data_folder = re.sub(r"(\/\/){1}|(\\){1}", '/', data_folder)

if __name__ == "__main__":
    data_home = {}
    events = {}
    site_meta = {}
    webinars = {}
    communities = {}
    projects = {}
    #Open and Read JSON Files
    try:
        with open(data_folder+'/data-home.json') as json_file:
            data_home = json.load(json_file)[0]
        with open(data_folder+'/events.json') as json_file:
            events = json.load(json_file)
        with open(data_folder+'/site-meta.json') as json_file:
            site_meta = json.load(json_file)[0]
        with open(data_folder+'/webinars.json') as json_file:
            webinars = json.load(json_file)
        with open(data_folder+'/communities.json') as json_file:
            communities = json.load(json_file)
        with open(data_folder+'/projects.json') as json_file:
            projects = json.load(json_file)
    except Exception as e:
        print(e.message)
    #Create Contexts
    context_base = {'contact_links': site_meta['contact_links'],
                'join_now_link': site_meta['join_now_link'],
                'favicon': site_meta['favicon'],
                'logo_dark': site_meta['logo_dark'],
                'logo_light': site_meta['logo_light']
                }
    context_home = {'site_about':data_home['site_about'],
                'site_history':data_home['site_history'],
                'alumni_description':data_home['alumni_description'],
                'services':data_home['services'],
                'events': events,
                'webinars': webinars,
                'open_source_communities': data_home['open_source'],
                'eventsP': data_home['eventsP'],
                'team': data_home['team'],
                'header_class': 'mainHeaderLayout1'
                }
    context_communities = {
        'header_class': 'mainHeaderLayout',
        'communities': communities
    }
    context_gallery = {
        'header_class': 'mainHeaderLayout'
    }
    context_projects = {
        'header_class': 'mainHeaderLayout1',
        'projects': projects
    }
    context_home.update(context_base)
    context_communities.update(context_base)
    context_gallery.update(context_base)
    context_projects.update(context_base)
    contexts = [('index.html', context_home), ('communities.html', context_communities), ('gallery.html', context_gallery), ('showcase.html', context_projects)]

    #StaticJinja
    site = make_site(contexts = contexts)
    site.render(use_reloader=True)