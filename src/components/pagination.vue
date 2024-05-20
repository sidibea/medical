<template>
    <div style="display: flex; justify-content: flex-end" class="dataTables_paginate paging_simple_numbers text-end" id="scroll-horizontal_paginate">
        <ul class="pagination">
            <li v-if="pagination.totalPages<=1" class="paginate_button page-item previous disabled" id="scroll-horizontal_previous">
                <a @click="goToPage((pagination.currentPage-1))" href="#" aria-controls="scroll-horizontal" data-dt-idx="0" tabindex="0" class="page-link">Précédent</a>
            </li>
            <li v-else-if="pagination.totalPages>1" class="paginate_button page-item previous disabled" id="scroll-horizontal_previous">
                <a @click="goToPage((currentPage-1))" href="#" aria-controls="scroll-horizontal" data-dt-idx="0" tabindex="0" class="page-link">Précédent</a>
            </li>
            <li v-for="page in pages" :key="page" class="paginate_button page-item active">
                <a  @click="goToPage(page)"   href="#" aria-controls="scroll-horizontal" data-dt-idx="1" tabindex="0" class="page-link">{{ page }}</a>
            </li>
            <li v-if="pagination.totalPages<=1" class="paginate_button page-item next disabled" id="scroll-horizontal_next">
                <a @click="goToPage((pagination.currentPage+1))" href="#" aria-controls="scroll-horizontal" data-dt-idx="3" tabindex="0" class="page-link">Suivant</a>
            </li>
            <li v-else-if="pagination.totalPages>1" class="paginate_button page-item next " id="scroll-horizontal_next">
                <a @click="goToPage((pagination.currentPage+1))" href="#" aria-controls="scroll-horizontal" data-dt-idx="3" tabindex="0" class="page-link">Suivant</a>
            </li>
        </ul>
    </div>

</template>
<script>

export default {


}
</script>