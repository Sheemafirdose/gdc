import streamlit as st
import os

# Title of the Streamlit App
st.title('events list platform')

# Function to serve static files
def serve_static_files(file_path):
    with open(file_path, 'r') as file:
        return file.read()

# Load and serve HTML, CSS, JS
st.components.v1.html(serve_static_files('index.html'), height=600)

# Example for JavaScript or CSS if needed
st.markdown("""
    <style>
    {css}
    </style>
""".format(css=serve_static_files('style.css')))

st.write("Your custom JavaScript can be executed here.")
st.script(serve_static_files('script.js'))
