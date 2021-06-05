<template>
  <div>
        <!-- Sidebar -->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <!-- Sidebar - Brand -->
            <NuxtLink class="sidebar-brand d-flex align-items-center justify-content-center" to='/'>
                <div class="sidebar-brand-text mx-3">Movies World</div>
            </NuxtLink>

            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <!-- Nav Item - Dashboard -->
            <li class="nav-item active">
                <a class="nav-link" >
                    <!-- <i class="fas fa-fw fa-tachometer-alt"></i> -->
                    <span>Hello, Admin</span>
                </a>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider">

            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <span>Movies</span>
                </a>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <NuxtLink class="collapse-item" to="/dashboard/movies/add">Add New</NuxtLink>
                        <NuxtLink class="collapse-item" to="/dashboard/movies">List All</NuxtLink>
                    </div>
                </div>
            </li>

            <!-- Nav Item - Pages Collapse Menu -->

        </ul>
        <!-- End of Sidebar -->
    </div>
</template>

<script>
export default {

}
</script>

<style>
.navbar-nav{
    height:100%;
}
</style>