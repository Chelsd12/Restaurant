class ItemsController < ApplicationController

 def index
    render json: @menu.items.all
end

def create
    item = @menu.items.new(item_params)
    if item.save
        render json: item
    else
        render json: { errors: item.errors }
    end
end

def destroy
    Item.find(params[:id]).destroy
    render json: { message: 'Item deleted' } 
end

private
def item_params
    params.require(:item).permit(:name, :price)
end

def set_menu
    @menu = Menu.find(params[:menu_id])
end
end
