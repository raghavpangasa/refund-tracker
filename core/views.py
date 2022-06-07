from django.shortcuts import render

# Create your views here.
def index(request):
    context = {
    }
    return render(request, "core/main.html", context)

def create_order(request):
    context = {}
    return render(request, "core/create_order.html", context)