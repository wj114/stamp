from django.conf.urls import url
from stampduty import views

urlpatterns = [
    url(r'^$', views.HomePageView.as_view(), name='home'),  # Notice the URL has been named
    # url(r'^stampduty/$', views.StampDutyView.as_view(), name='stamp'),
]
