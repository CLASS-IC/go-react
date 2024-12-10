import requests

def test_api():
    url = "http://localhost:5000/api/todos"
    payload = {
        "body": "testing"
    }
    
    i = 1
    # Send POST request
    while i < 10000000:
        response = requests.post(url, json=payload)
        i = i +1

if __name__ == "__main__":
    test_api()
