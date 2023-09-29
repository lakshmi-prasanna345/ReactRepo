from django.urls import path
from app1 import views

urlpatterns = [
    path("",views.index),
    path("get/",views.Appview.as_view()),
    path("post/",views.Appview.as_view()),
    path("put/<int:id>/",views.Appview.as_view()),
    path("del/<int:id>/",views.Appview.as_view()),
    path("post1/",views.Appview.as_view()),
    path("search/",views.SearchProducts.as_view(),name="search"),
    path("update/<int:id>/",views.EditView.as_view()),
    path("getsignup/",views.SignupView.as_view()),
    path("postsignup/",views.SignupView.as_view()),
]
