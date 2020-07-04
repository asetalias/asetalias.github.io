import json
import os
import re

import markdown
from staticjinja import Site

# Path to data folder
data_folder = os.path.abspath(os.path.dirname(__file__)) + "/data"
# Replace // and \ with /
data_folder = re.sub(r"(\/\/){1}|(\\){1}", "/", data_folder)


def convertToHtml(text):
    """Converts markdown text to HTML"""

    # Used for explicit line breaks
    final_text = text.replace("\\n", "\n")
    print("\n-- Parsing Markdown Text --")
    print(final_text)

    converted_text = markdown.markdown(final_text, output_format="html5").replace(
        "\n", "<br>"
    )
    print("-- Converted HTML --")
    print(converted_text)

    return converted_text


if __name__ == "__main__":
    data_home = {}
    events = {}
    site_meta = {}
    webinars = {}
    communities = {}
    projects = {}
    prev_events = ()

    # Open and Read JSON Files
    try:
        with open(data_folder + "/data-home.json") as json_file:
            data_home = json.load(json_file)[0]
        with open(data_folder + "/events.json") as json_file:
            events = json.load(json_file)
        with open(data_folder + "/site-meta.json") as json_file:
            site_meta = json.load(json_file)[0]
        with open(data_folder + "/webinars.json") as json_file:
            webinars = json.load(json_file)
        with open(data_folder + "/communities.json") as json_file:
            communities = json.load(json_file)
        with open(data_folder + "/projects.json") as json_file:
            projects = json.load(json_file)
        with open(data_folder + "/prev_events.json") as json_file:
            prev_events = json.load(json_file)
    except Exception as e:
        print("=== Error in reading data files === ")
        print(e.message)
        exit()

    # Convert Markdown to HTML for selected
    for event in events:
        event["description"] = convertToHtml(event["description"])

    for event in prev_events:
        event["description"] = convertToHtml(event["description"])

    data_home["alumni_description"] = convertToHtml(data_home["alumni_description"])

    for community in communities:
        community["desc"] = convertToHtml(community["desc"])

    for project in projects:
        project["description"] = convertToHtml(project["description"])

    # Create Contexts
    # context_base is used in common to all pages
    context_base = {
        "contact_links": site_meta["contact_links"],
        "join_now_link": site_meta["join_now_link"],
        "favicon": site_meta["favicon"],
        "logo_dark": site_meta["logo_dark"],
        "logo_light": site_meta["logo_light"],
        "flashbox": site_meta["flashbox"],
    }
    # Page specific context data
    # Homepage
    context_home = {
        "site_about": data_home["site_about"],
        "site_history": data_home["site_history"],
        "alumni_description": data_home["alumni_description"],
        "services": data_home["services"],
        "events": events,
        "webinars": webinars,
        "open_source_communities": data_home["open_source"],
        "eventsP": data_home["eventsP"],
        "team": data_home["team"],
        "alumini": data_home["alumini"],
        "header_class": "nav-bar",
    }
    # Communities Page
    context_communities = {
        "header_class": "nav-bar",
        "communities": communities,
    }
    # Gallery Page
    context_gallery = {"header_class": "nav-bar"}
    # Projects Page
    context_projects = {"header_class": "nav-bar", "projects": projects}

    #Previous Events Page
    context_prev_events = {
            "header_class": "nav-bar",
            "prev_events": prev_events,
        }

    # Add Base context to page-specific contexts
    context_home.update(context_base)
    context_communities.update(context_base)
    context_gallery.update(context_base)
    context_projects.update(context_base)
    context_prev_events.update(context_base)

    contexts = [
        ("components/_base.html", context_base),
        ("components/_header.html", context_base),
        ("index.html", context_home),
        ("communities.html", context_communities),
        ("gallery.html", context_gallery),
        ("showcase.html", context_projects),
        ("prev_events.html", context_prev_events),
    ]

    # StaticJinja
    site = Site.make_site(contexts=contexts, rules=((r"$_", False),))
    # Set reloader to true for hot-reloading.
    # Set reloader to false before pushing or travis will fail
    site.render(use_reloader=False)
