import React from "react";

export default function ContainerBox() {
  return (
    <div className="ContainerBox">
      <h1 className="mb-3">Baguio</h1>
      <div className="row forecast">
        <div className="col">
          <ul>
            <li className="mb-1">Last updated on Friday 10:34 AM</li>
            <li className="mb-1">Overcast clouds</li>
            <li className="mb-1">Humidity: 69%</li>
            <li className="mb-1">Wind: 2 km/h</li>
          </ul>
        </div>
        <div className="col-5 temperature">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAQBJREFUaN7t2csNwyAMBmBGYYSMwhgdgxEYjRW6ARu4HNyqB0CKednElf5b2/hLSALGAICRHKMABSjgUMDdD7xfLifkxByoJOJ33O3/nwHIhVgsKDWKriXhb+0WQD6wJxZegvhlADzrcUDhpeFlpwLyAa5BZ711Na4pgAXFNxFdABw2K4r/R9iRgLiw+N89MQSATxvYFN8F2DB0qkOJCggbi/8m9AASA0AiAXBuA0ziKIDACBAogMgIECkAYBUFKEABzwOIf4yKf5HJnkqIn8wxmk775y5oxC8pj1jUH9FWEd/YOqK1eERz94j2euFqUCF7NzjYbzHpLqUCFKCAJfkAq7RimK7qUtAAAAAASUVORK5CYII="
            alt="sun"
            width="40px"
          />
          <h2>22</h2>{" "}
          <a href="/" className="active">
            ºC
          </a>
        </div>
        <div className="weather-forecast"></div>
        <div className="col-10 source-code">
          <small>
            <a
              href="https://github.com/carmenllenado/vanilla-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              Source code
            </a>{" "}
            by Carmen Llenado, hosted on{" "}
            <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
              Netlify
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}
