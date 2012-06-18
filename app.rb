require 'rubygems'
require 'bundler/setup'
require 'sinatra'
require 'sinatra/base'
require 'sass/plugin/rack'
require './config'
require './helper'

class BreakingBad < Sinatra::Base
  get '/' do
    haml :index
  end
end