from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def sudoku(request):
    return render(request, 'Sudoku.html')

def snake(request):
    return render(request, 'snake.html')
