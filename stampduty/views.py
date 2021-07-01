from django.shortcuts import render
from django.views.generic import TemplateView  # Import TemplateView


# Add the two views we have been talking about  all this time :)
class HomePageView(TemplateView):
    template_name = "home.html"

# class StampDutyView(TemplateView):
# template_name = "stampduty.html"
