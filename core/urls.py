from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="dashboard"),
    path("order/add/", views.create_order, name="create-order"),
]
